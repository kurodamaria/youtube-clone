import { Header, ExpandedDrawer, MiniDrawer } from '@PCompo'
import { useState } from 'react/cjs/react.development'

import { GlobalContext } from '@Context'
import { useCustomNamedState } from 'src/hooks/useCustomNamedState'

export default function Home () {
  const expandedDrawer = useCustomNamedState('hide', true)
  const expandedDrawerModalLayer = useCustomNamedState('hide', true)
  const miniDrawer = useCustomNamedState('hide') // undefined on purpose
  return (
    <GlobalContext.Provider value={{ expandedDrawer, expandedDrawerModalLayer, miniDrawer }}>
      <Header />
      <ExpandedDrawer />
      <MiniDrawer />
      <div style={{ height: '300vh' }} />
    </GlobalContext.Provider>
  )
}
