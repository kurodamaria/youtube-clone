import {Guide, Header, MiniGuide, PageContent} from '@Components'
import {GuideContextProvider, ModalDialogProvider, StorageContextProvider} from "@Context";
import {ThemeProvider} from "styled-components";
import {Theme} from "@Styles";
import {Router} from "./Router";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme.light}>
        <GuideContextProvider>
          <StorageContextProvider>
            <ModalDialogProvider>
              <Header/>
              <Guide/>
              <MiniGuide/>
              <PageContent>
                <Router/>
              </PageContent>
            </ModalDialogProvider>
          </StorageContextProvider>
        </GuideContextProvider>
      </ThemeProvider>
    </>
  )
}

export default App
