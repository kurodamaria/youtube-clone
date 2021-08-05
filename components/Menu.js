import styled from 'styled-components'

import {
  Button
} from './Button'

import {
  FlexContainer
} from './containers'

export const MenuItem = styled(Button)`
  justify-content: flex-start;
  border: 0;
  margin: 0.5em 0;
  padding: 1em 2em;
  animation: none;
  text-align: start;
`

const MenuContainer = styled(FlexContainer)`
  border: 1px solid black;
  flex-direction: column;
  justify-content: flex-start;
`

// children should be an array of MenuItem
export const Menu = ({ children }) =>
  <MenuContainer>
    {children}
  </MenuContainer>
