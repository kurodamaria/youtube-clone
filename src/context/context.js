import { createContext } from 'react'
import { useCustomNamedState } from '@Hooks'

export const GlobalContext = createContext()
export const HeaderContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  // States are undefined on purpose,
  // so that the initial behaviour of hide and show is
  // controlled by css media queries
  const expandedDrawer = {
    ...useCustomNamedState('hide'),
    ...useCustomNamedState('isShown'),
    ...useCustomNamedState('disableMq'),
    ...useCustomNamedState('hideModal')
  }
  const miniDrawer = useCustomNamedState('hide')
  return (
    <GlobalContext.Provider value={{ expandedDrawer, miniDrawer }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const HeaderContextProvider = ({ children }) => {
  const headerLeft = useCustomNamedState('hide', false)
  const headerRight = useCustomNamedState('hide', false)
  return (
    <HeaderContext.Provider value={{ headerLeft, headerRight }}>
      {children}
    </HeaderContext.Provider>
  )
}
