import "./App.css";
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch} from "react-router-dom";
import { withRouter } from "react-router";
import { history } from "../redux-toolkit/configureStore";
import { Main, Quiz, Result, NotFound } from "../pages";

function App() {
  
  return (
    <>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/result/:fishname" component={Result}/>
          <Route exact component={NotFound}/>
        </Switch>
      </ConnectedRouter>
    </>
  );
}

export default App;
