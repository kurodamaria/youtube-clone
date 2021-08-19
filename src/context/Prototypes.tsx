import React, {createContext, useState} from "react";

export declare type StatePairContextT<T> = {
  state: T;
  setState: React.Dispatch<React.SetStateAction<T>>;
}

export function createStatePairContext<T>() {
  return createContext<StatePairContextT<T>>({} as StatePairContextT<T>)
}

export declare type ContextProviderPropsT = {
  children: React.ReactNode;
}

export function StatePairContextProvider<T>({
                                              initial,
                                              Context
                                            }: { initial: T, Context: React.Context<StatePairContextT<T>> }) {
  return function (props: ContextProviderPropsT) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState<T>(initial)
    return (
      <Context.Provider value={{state, setState}}>
        {props.children}
      </Context.Provider>
    )
  }
}

