import { css } from 'styled-components'

export const CssText = css`
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
`

export const CssHeaderText = css`
  ${CssText}
  font-size: 1.5rem;
`
