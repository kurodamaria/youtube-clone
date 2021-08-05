import styled from 'styled-components'
import {
  CssContainer,
  CssFlexContainer,
  CssFlexItem,
  CssGridContainer
} from '../styles/containers'

export const Container = styled.div`
  ${CssContainer}
`

export const FlexContainer = styled.div`
  ${CssFlexContainer}
`

export const FlexItem = styled.div`
  ${CssFlexItem}
`

// So this shit is a flex item and also a flex container
export const FlexItemFlexContainer = styled.div`
  ${CssFlexContainer}
  ${CssFlexItem}
`

export const GridContainer = styled.div`
  ${CssGridContainer}
`
