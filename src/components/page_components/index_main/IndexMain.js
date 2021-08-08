import styled from 'styled-components'
import { useEffect, useState } from 'react'

import { CssContainer } from '@Styles'
import { ListContainer, ListItemContainer, VideoCard } from '@GCompo'
import { useMediaQuery, useResizeObserver, useWindowResize } from '@Hooks'
import { useRef } from 'react/cjs/react.development'
import { SideBar } from '@PCompo'

export const IndexMainContainer = styled.div`
  ${CssContainer}
  background-color: lightcyan;
  margin-top: 65px;
`
// width range [x, y]
// once exceed range, shrink or grow col counts
// say, we know the avaliable width.
// which is the width of ListContainer
// then ... emm emm emm emm emm emm emm emm emm emm
// we have a width range
// [240px, 320px]

// so ... fuck this
const RangedColWidthGrid = styled(ListContainer)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.min}, 1fr));
  border: 1px solid black;
  gap: 1em 1em;
  margin: 2em auto;
  // 5em is the width of the gap between tracks
  max-width: calc(${props => props.max} * 6);
  list-style: none;
`

const VideoCardItemContainer = styled(ListItemContainer)`
  margin: 0 0.5em 1em 0.5em;
  max-width: 320px;
`

const WH100Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid blue;
`

const WidthReporterCore = styled.div`
  height: 200px;
  text-align: center;
  background-color: ${props => props.backgroundColor};
  border: 1px solid red;
`

const WidthReporter = ({ enchant = (width) => `${width}px` }) => {
  const [width, setWidth] = useState()
  const ref = useResizeObserver((entries) => {
    setWidth(entries[0].contentRect.width)
  })
  return (
    <WidthReporterCore ref={ref} backgroundColor={width >= 319 ? 'hsl(360, 100%, 68%)' : 'lightcyan'}>
      {enchant(width)}
    </WidthReporterCore>
  )
}

export const IndexMain = () => {
  return (
    <IndexMainContainer>
      <SideBar />
      <RangedColWidthGrid min='240px' max='320px'>
        {
          [...Array(10)].map(() => <WH100Wrapper><WidthReporter /></WH100Wrapper>)
        }
      </RangedColWidthGrid>
    </IndexMainContainer>
  )
}
