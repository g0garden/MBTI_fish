import "./App.css";
import React from "react";
import styled from "styled-components";

import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";

import { history } from "../redux/configureStore";

import { Main, Quiz, Result } from "../pages";

function App() {
  return (
    <Wrap>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </ConnectedRouter>
    </Wrap>
  );
}

const Wrap = styled.div`
  min-width: 300px;
  max-width: 375px;
  margin: 20px auto;
`;

export default App;
