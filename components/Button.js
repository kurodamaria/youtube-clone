import styled from 'styled-components'
import { CssButton } from '../styles/buttons'

const ButtonCore = styled.button`
  ${CssButton}
`

export const Button = ({ label }) => {
  return (
    <ButtonCore>
      {label}
    </ButtonCore>
  )
}
