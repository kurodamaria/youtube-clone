import React, {createContext} from "react";
import {useStorage} from "@Hooks";
import {HISTORY_KEY, SUBSCRIPTION_KEY, WATCH_LATER_KEY} from "@Helpers";

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
  const subsStorage = useStorage(SUBSCRIPTION_KEY)
  const watchLaterStorage = useStorage(WATCH_LATER_KEY)
  const historyStorage = useStorage(HISTORY_KEY)
  return (
    <StorageContext.Provider value={{subsStorage, watchLaterStorage, historyStorage}}>
      {props.children}
    </StorageContext.Provider>
  )
}