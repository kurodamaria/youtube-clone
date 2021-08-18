import {Guide, ModalBlock, Header, MiniGuide, PageContent} from '@Components'
import {GuideContextProvider} from "@Context";
import {Route, Switch} from "react-router-dom";
import {Explore, Home, Library, Subscriptions} from "./pages";
import {NotImplemented} from "./pages/NotImplemented";

function App() {
  return (
    <>
      <GuideContextProvider>
        <Header/>
        <Guide/>
        <MiniGuide/>
        <PageContent>
          <Switch>
            <Route path='/not-implemented'>
              <NotImplemented/>
            </Route>
            <Route path='/explore'>
              <Explore/>
            </Route>
            <Route path='/library'>
              <Library/>
            </Route>
            <Route path='/subscriptions'>
              <Subscriptions/>
            </Route>
            <Route path='/'>
              <Home/>
            </Route>
          </Switch>
        </PageContent>

      </GuideContextProvider>
    </>
  )
}

export default App
