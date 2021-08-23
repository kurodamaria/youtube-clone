import {HomeContent} from "@Components";
import {HomeContentFilter} from "../components/HomeContentFilter";
import {HomeContentFilterContextProvider} from "@Context";
import {useDocumentTitle} from "../hooks/useDocumentTitle";

export function Home(): JSX.Element {
  useDocumentTitle('Home')
  return (
    <>
      <HomeContentFilterContextProvider>
        <HomeContentFilter/>
        <HomeContent/>
      </HomeContentFilterContextProvider>
    </>

  )
}