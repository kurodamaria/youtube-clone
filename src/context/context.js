import { createContext, useState } from 'react'
import { useStateObject } from '@Hooks'

export const GlobalContext = createContext()
export const HeaderContext = createContext()
export const IndexPageContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  // States are undefined on purpose,
  // so that the initial behaviour of hide and show is
  // controlled by css media queries
  const expandedDrawer = {
    ...useStateObject('hide'),
    ...useStateObject('isShown'),
    ...useStateObject('disableMq'),
    ...useStateObject('hideModal')
  }
  const miniDrawer = useStateObject('hide')
  return (
    <GlobalContext.Provider value={{ expandedDrawer, miniDrawer }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const HeaderContextProvider = ({ children }) => {
  const headerLR = useStateObject('hide', false)
  return (
    <HeaderContext.Provider value={{ headerLR }}>
      {children}
    </HeaderContext.Provider>
  )
}

// New to you needs to be styled seperately
// I gurantee that New to you will always be the last element of filters
// and All is always the first one
const filters = [
  'All', 'Music', 'Lofi music', 'Background music', 'Pixel art',
  'Playlists', 'Computer programming', 'Anime', 'Science', 'Art',
  'Live', 'Electronic dance music', 'J-Pop', 'Theme music', 'Illustrations',
  'Muxies', 'Wacom', 'Computers', 'Action-adventure games', 'Recently uploaded',
  'New to you'
]
export const IndexPageContextProvider = ({ children }) => {
  const [currentFilter, setCurrentFilter] = useState(0)
  return (
    <IndexPageContext.Provider value={{ filter: { filters, currentFilter, setCurrentFilter } }}>
      {children}
    </IndexPageContext.Provider>
  )
}
