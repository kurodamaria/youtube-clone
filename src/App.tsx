import {Guide, Header, MiniGuide, PageContent} from '@Components'
import {GuideContextProvider, StorageContextProvider} from "@Context";
import {Route, Switch} from "react-router-dom";
import {Home, Subscriptions} from "./pages";
import {ThemeProvider} from "styled-components";
import {Theme} from "@Styles";
import {Channel} from "./pages/Channel";
import {NotImplemented} from "./pages/NotImplemented";
import {Watch} from "./pages/Watch";
import {Search} from "./pages/Search";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme.light}>
        <GuideContextProvider>
          <StorageContextProvider>
            <Header/>
            <Guide/>
            <MiniGuide/>
            <PageContent>
              <Switch>
                <Route path='/not-implemented'>
                  <NotImplemented/>
                </Route>
                <Route path='/subscriptions'>
                  <Subscriptions/>
                </Route>
                <Route path='/watch/:id'>
                  <Watch/>
                </Route>
                <Route path='/search/:query'>
                  <Search/>
                </Route>
                <Route path='/channel/:channelId'>
                  <Channel/>
                </Route>
                <Route path='/'>
                  <Home/>
                </Route>
              </Switch>
            </PageContent>
          </StorageContextProvider>
        </GuideContextProvider>
      </ThemeProvider>
    </>
  )
}

export default App
