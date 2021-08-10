import { GlobalContext } from '@Context'
import { DivContainer, ModalLayer } from '@GCompo'
import { useMediaQueryT } from '@Hooks'
import { DrawerTogglerAndBrand } from '@PCompo'
import { useCallback, useContext, useEffect } from 'react'
import { useDrawerToggler } from 'src/hooks/useDrawerToggler'
import { CssDisplayControl, CssHeaderText } from 'src/styles'
import styled, { css } from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: -240px;
  width: 240px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: ${props => props.theme.white};
  z-index: 2;
  transition: transform 0.2s,
              visibility 0s 0.2s;
  ${props => !props.hide ? css`transform: translateX(240px);` : css`transform: translateX(-240px);`}
  visibility: hidden;
  @media(min-width: 1329px) {
    visibility: visible;
    transition: none;
  }
  ${CssDisplayControl}
`

const HeadContainer = styled(DivContainer)`
  ${CssHeaderText}
`

export function useHideModal () {
  const { expandedDrawer } = useContext(GlobalContext)
  // Modal is not reacting to the viewport width,
  // but is reacting to the drawer's hide property
  // so media query is not suitable
  useEffect(() => {
    // >= 1329 always hide modal
    // Drawer     Modal
    // true       true
    // false      true
    // undefined  true
    if (window.innerWidth >= 1329) {
      expandedDrawer.setHideModal(true)
    } else {
      // < 1329 hide when the drawer is hide
      // Drawer     Modal
      // true       true
      // false      false
      // undefined  true
      if (expandedDrawer.hide || expandedDrawer.hide === undefined) {
        expandedDrawer.setHideModal(true)
      } else {
        expandedDrawer.setHideModal(false)
      }
    }
  }, [expandedDrawer])
}

function useExpandedDrawerMq () {
  const { expandedDrawer } = useContext(GlobalContext)
  const mqCb = useCallback(() => {
    if (expandedDrawer.hide === false) {
      console.log('> reached 1329px while showing the drawer')
      if (expandedDrawer.disableMq) {
        console.log('> disableMq flag, hide through setHide(true)')
        expandedDrawer.setHide(true)
      } else {
        console.log('> pass control to media query')
        expandedDrawer.setHide(undefined)
      }
    }
  }, [expandedDrawer])
  useMediaQueryT('(min-width: 1329px)', mqCb)
}

const ExpandedDrawerCore = ({ className, style }) => {
  const { expandedDrawer } = useContext(GlobalContext)
  const togger = useDrawerToggler()
  useExpandedDrawerMq()
  useHideModal()
  return (
    <div className={className} style={style}>
      <Container hide={expandedDrawer.hide}>
        <HeadContainer>
          <DrawerTogglerAndBrand />
        </HeadContainer>
      </Container>
      <ModalLayer hide={expandedDrawer.hideModal} onClick={togger} />
    </div>
  )
}

const ExpandedDrawer = styled(ExpandedDrawerCore)`
  // disable the layer
  ${ModalLayer} {
    z-index: 1;
  }
`
export { ExpandedDrawer }
