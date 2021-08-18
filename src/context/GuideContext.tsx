import React, {createContext, useState} from "react";

type GuideContextT = {
  showGuide: boolean;
  setShowGuide: React.Dispatch<React.SetStateAction<boolean>>;
  lockGuide: boolean;
  setLockGuide: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GuideContext = createContext<GuideContextT>({} as GuideContextT)

type GuideContextProviderPropsT = {
  children: React.ReactNode;
}

export function GuideContextProvider(props: GuideContextProviderPropsT): JSX.Element {
  // The Guide is showing if (showGuide || !lockGuide)
  const [showGuide, setShowGuide] = useState<boolean>(false)
  const [lockGuide, setLockGuide] = useState<boolean>(false)
  return (
    <GuideContext.Provider value={{showGuide, setShowGuide, lockGuide, setLockGuide}}>
      {props.children}
    </GuideContext.Provider>
  )
}
