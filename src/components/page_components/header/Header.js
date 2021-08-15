import { DisplayControlledDiv } from '@GCompo'
import { RenderIf } from '@Helpers'
import { CssFixed, CssHeaderText } from '@Styles'
import styled from 'styled-components'
import { HeaderCenter } from './HeaderCenter'
import { HeaderLeft } from './HeaderLeft'
import { HeaderRight } from './HeaderRight'
import { useContext } from 'react'
import { LayoutContext } from '@Context'

const HeaderContainer = styled(DisplayControlledDiv)`
  ${CssFixed}
  ${CssHeaderText}
  
  bottom: unset;
  height: 57px;

  display: flex;
  justify-content: space-between;

  z-index: 1;

  background-color: ${props => props.theme.white};
`

export function Header () {
  const { LRState } = useContext(LayoutContext)
  return (
    <HeaderContainer>
      <RenderIf cond={LRState.show}>
        <HeaderLeft />
      </RenderIf>
      <HeaderCenter />
      <RenderIf cond={LRState.show}>
        <HeaderRight />
      </RenderIf>
    </HeaderContainer>
  )
}
