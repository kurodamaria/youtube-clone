import { GlobalContextProvider } from '@Context'
import { ContentContainer, Navi } from '@PCompo'

export default function Home () {
  return (
    <GlobalContextProvider>
      <Navi />
      <ContentContainer />
    </GlobalContextProvider>
  )
}
