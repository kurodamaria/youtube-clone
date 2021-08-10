import { GlobalContext } from '@Context'
import { DivContainer, ModalLayer } from '@GCompo'
import { useMediaQuery } from '@Hooks'
import { DrawerTogglerAndBrand } from '@PCompo'
import { useContext, useEffect, useState } from 'react'
import { CssHeaderText } from 'src/styles'
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
  background-color: yellow;
  z-index: 2;
  transition: transform 0.3s;
  ${props => props.hide ? css`transform: translateX(-240px);` : css`transform: translateX(240px);`}
  @media(min-width: 1313px) {
    visibility: ${props => props.hide ? '' : 'hidden'};
  }
`

const HeadContainer = styled(DivContainer)`
  ${CssHeaderText}
`
// I won't implement the following shit because it's shit
// >= 1313px
// disable ModalLayer -> hide and not shouldDisable
// if Drawer is showing, *DISABLE* it -> !hide ? override the hide state
//
// >= 1329px
// Show Drawer if not *DISABLED* -> disabled ? setHide(false)
//
// <= 1312px
// if Drawer is showing, hide it -> !hide ? setHide(true)
//
// Instead
// >= 1313px
// disable ModalLayer
// if Drawer is showing, hide it
//
// >= 1329px
// show Drawer
//
// <= 1312px
// hide Drawer

const ExpandedDrawerCore = ({ className, style }) => {
  const globalContext = useContext(GlobalContext)
  const [shouldDisable, setShouldDisable] = useState(true)
  useMediaQuery('(min-width: 1313px)', (mql) => {
    // disable interaction only when viewport width is less than 1313px
    setShouldDisable(!mql.matches && !globalContext.expandedDrawerModalLayer.hide)
  })

  // sync the hide state
  useEffect(() => {
    globalContext.expandedDrawerModalLayer.setHide(
      globalContext.expandedDrawer.hide
    )
  }, [globalContext.expandedDrawer.hide, globalContext.expandedDrawerModalLayer])

  return (
    <div className={className} style={style}>
      <Container hide={globalContext.expandedDrawer.hide}>
        <HeadContainer>
          <DrawerTogglerAndBrand />
        </HeadContainer>
      </Container>
      <ModalLayer
        backgroundColor='black'
        zIndex='1'
        opacity='0.5'
        onClick={() => {
          globalContext.expandedDrawer.setHide(true)
        }}
        hide={globalContext.expandedDrawerModalLayer.hide}
        shouldDisable={shouldDisable}
      />
    </div>
  )
}

const ExpandedDrawer = styled(ExpandedDrawerCore)`
  // disable the layer
  ${ModalLayer} {
    @media(min-width: 1329px) {
      transition: none;
      visibility: hidden !important;
    }
  }
`
export { ExpandedDrawer }
