import React, {createContext} from "react";
import {useStorage} from "@Hooks";

type StorageT = ReturnType<typeof useStorage>
type StorageContextT = {
  subsStorage: StorageT;
  watchLaterStorage: StorageT;
  historyStorage: StorageT;
}

export const StorageContext = createContext<StorageContextT>({} as StorageContextT)

type PropsT = {
  children: React.ReactNode;
}

export function StorageContextProvider(props: PropsT) {
  console.log('rendering StorageContextProvider')
  const subsStorage = useStorage('subscriptions')
  const watchLaterStorage = useStorage('watch_later')
  const historyStorage = useStorage('history')
  return (
    <StorageContext.Provider value={{subsStorage, watchLaterStorage, historyStorage}}>
      {props.children}
    </StorageContext.Provider>
  )
}