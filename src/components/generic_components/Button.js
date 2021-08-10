import styled from 'styled-components'

import { CssButton } from '@Styles'

const ButtonCore = styled.button`
  ${CssButton}
`

const IconContainer = styled.div`
  font-size: 1.5em;
  margin-right: 0.5em;
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Button = ({ label, Icon, className, style }) => {
  return (
    <ButtonCore className={className} style={style}>
      {Icon ? <IconContainer><Icon /></IconContainer> : null}
      {label}
    </ButtonCore>
  )
}
