import styled from 'styled-components'

export const Fixed = (Component) => styled(Component)`
  position: fixed;
  left: ${props => props.left};
  right: ${props => props.right};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  z-index: ${props => props.zIndex};
`

export const Bordered = (Component) => styled(Component)`
  border: 1px solid black;
`

export const Cursor = (Component, cursor) => styled(Component)`
  cursor: ${cursor};
`

export const ChildrenMargin = (Component) => styled(Component)`
  & > * {
    margin: ${props => props.margin}
  }
`

export const ChildrenPadding = (Component) => styled(Component)`
  & > * {
    padding: ${props => props.margin}
  }
`

export const Placeholder = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
`
