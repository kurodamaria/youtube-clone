import { css } from 'styled-components'

/* Containers */
export const CssContainer = css`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  background-color: ${props => props.theme.white};
`

export const CssFlexContainer = css`
  ${CssContainer}
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};
`

// Beaware that FlexItem is also a container
export const CssFlexItem = css`
  ${CssContainer}
  flex-basis: ${props => props.basis};
  flex-shrink: ${props => props.shrink};
  flex-grow: ${props => props.grow};

  align-self: ${props => props.alignSelf};
`

export const CssGridContainer = css`
  ${CssContainer}
  display: grid;
  grid-template-columns: ${props => props.templateCols};
  grid-template-rows: ${props => props.templateRows};
  gap: ${props => props.gap}
`
