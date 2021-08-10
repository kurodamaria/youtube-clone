import { createContext } from 'react'
import { useCustomNamedState } from '@Hooks'

export const GlobalContext = createContext()
export const HeaderContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const expandedDrawer = useCustomNamedState('hide', true)
  const expandedDrawerModalLayer = useCustomNamedState('hide', true)
  const miniDrawer = useCustomNamedState('hide') // undefined on purpose
  return (
    <GlobalContext.Provider value={{ expandedDrawer, expandedDrawerModalLayer, miniDrawer }}>
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
