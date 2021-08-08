import styled from 'styled-components'
import { useState } from 'react'

import { CssContainer } from '@Styles'
import { ListContainer, ListItemContainer, VideoCard } from '@GCompo'
import { useMediaQuery } from '@Hooks'

export const IndexMainContainer = styled.div`
  ${CssContainer}
  background-color: lightcyan;
  width: 100%;
  margin-top: 65px;
`
// width range [x, y]
// once exceed range, shrink or grow col counts
// say, we know the avaliable width.
// which is the width of ListContainer
// then ... emm emm emm emm emm emm emm emm emm emm
// we have a width range
// [240px, 320px]

const GridListContainer = styled(ListContainer)`
  display: grid;
  @media(min-width: calc(1 * 320px)) {
    grid-template-columns: repeat(1, 320px);
  }
  @media(min-width: calc(2 * 320px)) {
    grid-template-columns: repeat(2, 320px);
  }
  @media(min-width: calc(3 * 320px)) {
    grid-template-columns: repeat(3, 320px);
  }
  @media(min-width: calc(4 * 320px)) {
    grid-template-columns: repeat(4, 320px);
  }
  @media(min-width: calc(5 * 320px)) {
    grid-template-columns: repeat(5, 320px);
  }
  @media(min-width: calc(6 * 320px)) {
    grid-template-columns: repeat(6, 320px);
  }
  width: 100%;
  list-style: none;
`

const VideoCardItemContainer = styled(ListItemContainer)`
  margin: 0 0.5em 1em 0.5em;
  max-width: 320px;
`

export const IndexMain = () => {
  return (
    <IndexMainContainer>
      <GridListContainer />
    </IndexMainContainer>
  )
}
