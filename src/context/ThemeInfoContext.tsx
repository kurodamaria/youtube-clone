// Provide and set the current theme flavour

import React, {createContext, useState} from "react";
type ThemesT = 'light' | 'dark' | 'system'

type ThemeInfoContextT = {
  currentTheme: ThemesT;
  setCurrentTheme: React.Dispatch<React.SetStateAction<ThemesT>>;
}

export const ThemeInfoContext = createContext<ThemeInfoContextT>({} as ThemeInfoContextT)
type ThemeInfoContextPropsT = {
  children: React.ReactNode;
}
export function ThemeInfoContextProvider(props: ThemeInfoContextPropsT) {
  const [currentTheme, setCurrentTheme] = useState<ThemesT>('light')
  // should read from localStorage later
  return (
    <ThemeInfoContext.Provider value={{currentTheme, setCurrentTheme}}>
      {props.children}
    </ThemeInfoContext.Provider>
  )
}