import { IndexPageContextProvider } from '@Context'
import { ContentContainer } from '@PCompo'
import { Filter } from './Filter'
import { Content } from './Content'

export function IndexContent () {
  return (
    <IndexPageContextProvider>
      <ContentContainer>
        <Filter />
        <Content />
      </ContentContainer>
    </IndexPageContextProvider>
  )
}
