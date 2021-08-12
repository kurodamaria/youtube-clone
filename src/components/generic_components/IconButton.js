import styled from 'styled-components'

import { CssClickTransition } from '@Styles'

const IconButtonCore = ({ children, onClick, className, style }) => {
  return (
    <button
      className={className}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export const IconButton = styled(IconButtonCore)`
  ${CssClickTransition}

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em 0.3em;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  font-size: ${props => props.fontSize ? props.fontSize : 'inherit'};
`
