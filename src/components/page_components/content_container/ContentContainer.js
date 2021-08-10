import { GlobalContext } from '@Context'
import { useMediaQueryT } from '@Hooks'
import { useRouter } from 'next/router'
import { useCallback, useContext, useState } from 'react'
import styled from 'styled-components'

const ContentContainerCore = styled.div`
  margin-top: var(--masthead-height);
  margin-left: ${props => props.ml};
  text-align: center;
  background-color: ${props => props.theme.white95};
  border-radius: 0.2em;
  padding: 2em 2em;
`

function useContentContainerSetMargin () {
  const [ml, setMl] = useState()
  const { expandedDrawer } = useContext(GlobalContext)
  // >= 1329px
  // ExpandedDrawer       MiniDrawer      ml
  // false                  *             --expanded-drawer-width
  // true                   *             --mini-drawer-width
  // undefined              *             --expanded-drawer-width

  // >= 808px
  // ExpandedDrawer       MiniDrawer      ml
  //  *                     *             --mini-drawer-width

  // >= 0px
  // ExpandedDrawer       MiniDrawer      ml
  //  *                     *             0
  const cbMin1329 = useCallback(() => {
    if (expandedDrawer.hide === true) {
      setMl('var(--mini-drawer-width)')
    } else {
      setMl('var(--expanded-drawer-width)')
    }
  }, [expandedDrawer.hide])

  const cbMin808 = useCallback(() => {
    setMl('var(--mini-drawer-width)')
  }, [])

  const cbMax807 = useCallback(() => {
    setMl('0')
  }, [])
  useMediaQueryT('(min-width: 1329px)', cbMin1329)
  useMediaQueryT('(min-width: 808px) and (max-width: 1328px)', cbMin808)
  useMediaQueryT('(max-width: 807px)', cbMax807)
  return ml
}

export const ContentContainer = ({ children, className, style }) => {
  const ml = useContentContainerSetMargin()
  return (
    <ContentContainerCore ml={ml} className={className} style={style}>
      {children}
    </ContentContainerCore>
  )
}
