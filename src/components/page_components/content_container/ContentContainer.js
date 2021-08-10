import { GlobalContext } from '@Context'
import { useRouter } from 'next/dist/client/router'
import { useContext } from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import styled from 'styled-components'

const ContentContainerCore = styled.div`
  border: 1px solid red;
  margin-top: var(--masthead-height);
  margin-left: ${props => props.ml};
  text-align: center;
  @media(max-width: 807px) {
    margin-left: 0;
  }
`

export const ContentContainer = ({ children, className, style }) => {
  const router = useRouter()
  const globalContext = useContext(GlobalContext)
  console.log(globalContext)
  const [ml, setMl] = useState()
  useEffect(() => {
    if (!globalContext.expandedDrawer.hide) {
      setMl('var(--expanded-drawer-width)')
    } else if (!globalContext.miniDrawer.hide) {
      setMl('var(--mini-drawer-width)')
    }
  }, [globalContext.expandedDrawer.hide, globalContext.miniDrawer.hide, setMl])
  return (
    <ContentContainerCore ml={ml}>
      {router.pathname}
      {children}
    </ContentContainerCore>
  )
}
