import "./App.css";
import React, { useEffect } from "react";
import styled from "styled-components";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { history } from "../redux-toolkit/configureStore";
import { Main, Quiz, Result } from "../pages";
import { firestore } from "./firebase";


function App() {
  
  //firebase 연결확인
  // useEffect(() => {
  //   const qnaList = firestore.collection("qnaList");

  //   qnaList.get()
  //   .then((docs) => {
  //     let qnaList_data = [];

  //     docs.forEach((doc) => {
  //       if (doc.exists) {
  //         qnaList_data = [...qnaList_data, { id: doc.id, ...doc.data() }];
  //       }
  //     });
  //     console.log(qnaList_data);
  //   });
  // }, []);

  return (
    <>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </ConnectedRouter>
    </>
  );
}

export default App;
