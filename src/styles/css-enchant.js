import { css } from 'styled-components'

export const CssFixed = css`
  position: fixed;
  left: ${props => props.left || 0};
  right: ${props => props.right || 0};
  top: ${props => props.top || 0};
  bottom: ${props => props.bottom || 0};
  z-index: ${props => props.zIndex || 0};
`

export const CssChildrenMargin = css`
  & > * {
    margin: ${props => props.childrenMargin}
  }
`

export const CssChildrenPadding = css` 
  & > * {
    padding: ${props => props.childrenPadding}
  }
`
