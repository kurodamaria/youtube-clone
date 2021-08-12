import { IndexPageContext } from '@Context'
import { VideoCard } from '@GCompo'
import { useContext } from 'react'
import styled from 'styled-components'

const IndexContentContainer = styled.div`
  max-width: 2256px;
  margin: calc(var(--masthead-height) * 2 + 1em) 1em auto auto;
  padding: 0 1em;
  display: grid;
  --items-per-row: 1;
  @media(max-width: 511px) {
    width: 336px;
  }
  @media(min-width: 512px) {
      --items-per-row: 2;
  }
  @media(min-width: 888px) {
      --items-per-row: 3;
  }
  @media(min-width: 1144px) {
      --items-per-row: 4;
  }
  @media(min-width: 1800px) {
      --items-per-row: 5;
  }
  @media(min-width: 2136px) {
      --items-per-row: 6;
  }
  gap: 1em 1em;
  // relative to the parent container (ContentContainer)
  width: 100%; 
  // relative to this container
  grid-template-columns: repeat(var(--items-per-row), calc((100% - var(--items-per-row) * 1em + 1em) / var(--items-per-row)));
  border: 1px solid red;
`

export const Content = () => {
  const { filter } = useContext(IndexPageContext)
  return (
    <IndexContentContainer>
      Showing Videos by filter {filter.filters[filter.currentFilter]}
      {
        [...Array(100)].map(() => <VideoCard />)
      }
    </IndexContentContainer>
  )
}
