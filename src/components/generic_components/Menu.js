import styled from 'styled-components'

// import { Button, DivContainer } from '@GCompo'
import { Button } from './Button'
import { DivContainer } from './Containers'

export const MenuItem = styled(Button)`
  text-align: start;
  padding: 1em 2em 1em 1em;
`

export const MenuSection = styled(DivContainer)`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  margin: 0.3em 0;
  & + & {
    margin-top: 0;
  }
`

const MenuContainer = styled(DivContainer)`
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  justify-content: flex-start;
`

// children should be an array of MenuItem
export const Menu = ({ children }) => {
  return (
    <MenuContainer>
      {children}
    </MenuContainer>
  )
}
