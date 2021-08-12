import { Loading, TopLoadingIndicator } from '@GCompo'
import { ContentContainer } from '@PCompo'

export default function Home () {
  return (
    <>
      <TopLoadingIndicator />
      <ContentContainer>
        <Loading />
      </ContentContainer>
    </>
  )
}
