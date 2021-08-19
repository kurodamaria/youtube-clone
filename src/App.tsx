import {Guide, Header, MiniGuide, PageContent} from '@Components'
import {GuideContextProvider} from "@Context";
import {Route, Switch} from "react-router-dom";
import {Explore, Home, Library, Subscriptions} from "./pages";
import {NotImplemented} from "./pages/NotImplemented";
import {ThemeProvider} from "styled-components";
import {useContext, useState} from "react";
import {Theme} from "@Styles";
import {ThemeInfoContext} from "./context/ThemeInfoContext";

function App() {
  const {currentTheme} = useContext(ThemeInfoContext)
  return (
    <>
      <ThemeProvider theme={Theme.light}>
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
      </ThemeProvider>
    </>
  )
}

export default App
