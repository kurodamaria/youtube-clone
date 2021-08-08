import { css } from 'styled-components'

export const CssFixed = css`
  position: fixed;
  left: ${props => props.left};
  right: ${props => props.right};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  z-index: ${props => props.zIndex};
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
