import "./App.css";
import React, { useEffect } from "react";
import styled from "styled-components";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { history } from "../redux-toolkit/configureStore";
import { Main, Quiz, Result } from "../pages";
import { firestore } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import {api as userActions} from "../redux-toolkit/modules/users";


function App() {
  
  return (
    <>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </ConnectedRouter>
    </>
  );
}

export default App;
