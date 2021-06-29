import "./App.css";

import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";

import { history } from "../redux/configureStore";
import React from "react";

import { Main, Quiz, Result } from "../pages";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
