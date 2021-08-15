import { LayoutContext } from '@Context'
import { DivContainer, ModalLayer } from '@GCompo'
import { RenderIf } from '@Helpers'
import { DrawerTogglerAndBrand } from '@PCompo'
import { useContext } from 'react'
import { CssDisplayControl, CssHeaderText } from 'src/styles'
import styled, { css } from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0px;
  width: 240px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: ${props => props.theme.white};
  z-index: 3;
  transition: transform 0.2s,
              visibility 0s 0.2s;
  ${CssDisplayControl}
`

const HeadContainer = styled(DivContainer)`
  ${CssHeaderText}
`

const ExpandedDrawerCore = ({ className, style }) => {
  const { DrawerState, DrawerModalState, onClickDrawerModalLayer } = useContext(LayoutContext)
  return (
    <RenderIf cond={DrawerState.show}>
      <div className={className} style={style}>
        <Container>
          <HeadContainer>
            <DrawerTogglerAndBrand />
          </HeadContainer>
        </Container>
        <RenderIf cond={DrawerModalState.show}>
          <ModalLayer
            onClick={onClickDrawerModalLayer}
          />
        </RenderIf>
      </div>
    </RenderIf>
  )
}

const ExpandedDrawer = styled(ExpandedDrawerCore)`
  // disable the layer
  ${ModalLayer} {
    z-index: 2;
  }
`
export { ExpandedDrawer }
