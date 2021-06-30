import "./App.css";
import React, { useEffect } from "react";
import styled from "styled-components";

import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";

import { history } from "../redux/configureStore";

import { Main, Quiz, Result } from "../pages";
import {firestore} from "./firebase";

function App() {
  
  //firebase 연결확인
  // useEffect(() => {
  //   const qnaList = firestore.collection("qnaList");
    
  //   // qnaList.doc("qna_1").get().then((doc) => {
  //   //   console.log(doc);
  //   //   console.log(doc.data());
  //   //   console.log(doc.id);
  //   // });

  //   qnaList.get().then(docs => {
  //     let qnaList_data = [];

  //     docs.forEach((doc) => {
  //       if(doc.exists){
  //         qnaList_data = [...qnaList_data, 
  //           {id: doc.id, ...doc.data()}]
  //       }
  //     });
  //     console.log(qnaList_data);
  //   });
  // },[])

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
  width: 90vw;
  max-width: 375px;
  margin: 20px auto;
`;

export default App;
