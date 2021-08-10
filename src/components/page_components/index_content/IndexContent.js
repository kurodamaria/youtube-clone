import { ContentContainer } from '@PCompo'
import styled from 'styled-components'
import { VideoCard } from '@GCompo'

const IndexContentContainer = styled(ContentContainer)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`

export function IndexContent () {
  return (
    <IndexContentContainer>
      {
        [...Array(100)].map(() => <VideoCard />)
      }
    </IndexContentContainer>
  )
}
