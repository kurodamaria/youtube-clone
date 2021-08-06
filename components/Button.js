import styled from 'styled-components'
import { CssButton } from '../styles/css-buttons'

const ButtonCore = styled.button`
  ${CssButton}
  align-items: center;
`

const IconContainer = styled.span`
  font-size: 1.5em;
  margin-right: 0.5em;
  display: flex;
`

export const Button = ({ label, Icon, className, style }) => {
  return (
    <ButtonCore className={className} style={style}>
      {Icon ? <IconContainer><Icon /></IconContainer> : null}
      {label}
    </ButtonCore>
  )
}
