import React, {createContext, useState} from "react";

type IdT = string;

type WatchLaterContextT = {
  list: IdT[];
  setList: React.Dispatch<React.SetStateAction<IdT[]>>
}

export const WatchLaterContext = createContext<WatchLaterContextT>({} as WatchLaterContextT)

type PropsT = {
  children: React.ReactNode;
}

export function WatchLaterContextProvider(props: PropsT) {
  const [list, setList] = useState<string[]>([])
  return (
    <WatchLaterContext.Provider value={{list, setList}}>
      {props.children}
    </WatchLaterContext.Provider>
  )
}