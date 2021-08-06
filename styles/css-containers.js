import { css } from 'styled-components'

// Due to the nature of how browsers process css rules,
// all the arguments below are optional.
export const CssContainer = css`
  /* set container type and other display attributes */
  display: ${props => props.display};

  /* Normal block container */
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  background-color: ${props => props.theme.white};

  /* Flex container */
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};

  /* Flex item */
  flex-basis: ${props => props.basis};
  flex-shrink: ${props => props.shrink};
  flex-grow: ${props => props.grow};
  align-self: ${props => props.alignSelf};

  /* Grid container */
  grid-template-columns: ${props => props.templateCols};
  grid-template-rows: ${props => props.templateRows};
  gap: ${props => props.gap}
`
