import { css } from 'styled-components'

export const CssClickTransition = css`
  transition: background-color 0.2s,
              box-shadow 0.3s;
  box-shadow: inset 0px 0px 0px 0px ${props => props.theme.white70};
  background-color: ${props => props.theme.white};
  &:active { // Using active for mousedown
    transition: background-color 0.2s;
    background-color: ${props => props.theme.white85};
    box-shadow: inset 0px 0px 0px 3px transparent;
  }
`
