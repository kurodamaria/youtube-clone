import styled from 'styled-components'
import { useState } from 'react'

import { DivContainer } from '@Components'
import { CssHeaderText } from '@Styles'

import { HeaderLeft } from './HeaderLeft'
import { HeaderCenter } from './HeaderCenter'
import { HeaderRight } from './HeaderRight'
const HeaderContainer = styled(DivContainer)`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  ${CssHeaderText}
  padding: 0.2em 0.1em;
  border-bottom: 1px solid ${props => props.theme.gray};
  z-index: 1;
`

export function Header () {
  const [hideOverrideLR, setHideOverrideLR] = useState(false)
  return (
    <HeaderContainer>
      <HeaderLeft hideOverride={hideOverrideLR} />
      <HeaderCenter toggleLR={() => { setHideOverrideLR(!hideOverrideLR) }} />
      <HeaderRight hideOverride={hideOverrideLR} />
    </HeaderContainer>
  )
}
