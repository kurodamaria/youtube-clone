import { GlobalContext } from '@Context'
import { useMediaQueryT } from '@Hooks'
import { useCallback, useContext, useState } from 'react'

export function useLeftPanelWidth () {
  const [left, setLeft] = useState()
  const { expandedDrawer } = useContext(GlobalContext)
  // >= 1329px
  // ExpandedDrawer       MiniDrawer      left
  // false                  *             --expanded-drawer-width
  // true                   *             --mini-drawer-width
  // undefined              *             --expanded-drawer-width

  // >= 808px
  // ExpandedDrawer       MiniDrawer      left
  //  *                     *             --mini-drawer-width

  // >= 0px
  // ExpandedDrawer       MiniDrawer      left
  //  *                     *             0
  const cbMin1329 = useCallback(() => {
    if (expandedDrawer.hide === true) {
      setLeft('var(--mini-drawer-width)')
    } else {
      setLeft('var(--expanded-drawer-width)')
    }
  }, [expandedDrawer.hide])

  const cbMin808 = useCallback(() => {
    setLeft('var(--mini-drawer-width)')
  }, [])

  const cbMax807 = useCallback(() => {
    setLeft('0')
  }, [])
  useMediaQueryT('(min-width: 1329px)', cbMin1329)
  useMediaQueryT('(min-width: 808px) and (max-width: 1328px)', cbMin808)
  useMediaQueryT('(max-width: 807px)', cbMax807)
  return left
}
