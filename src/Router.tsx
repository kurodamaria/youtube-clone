import {Route, Switch} from "react-router-dom";
import {Channel, History, Home, NotImplemented, Search, Subscriptions, Watch} from "@Pages";

export function Router() {
  return <Switch>
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
    <Route path='/history'>
      <History/>
    </Route>
    <Route path='/'>
      <Home/>
    </Route>
  </Switch>;
}