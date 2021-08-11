import styled from 'styled-components'

import { CssClickable } from '@Styles'

const ButtonCore = ({ label, Icon, className, style }) => {
  return (
    <button className={className} style={style}>
      {label}
    </button>
  )
}

export const Button = styled(ButtonCore)`
  ${CssClickable}
  display: flex;
  padding: 0.5em 1em;
  white-space: nowrap;
  border: 0;
`
