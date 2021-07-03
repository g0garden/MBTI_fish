import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import Quiz from "./modules/qnaList";
import Fish from "./modules/fishList";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  qnaList: Quiz,
  fishList: Fish,
  router: connectRouter(history),
});

const middlewares = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  })
]

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

//리덕스 개발자 도구와 미들웨어를 사용하기 위해 필요한 작업이라고 합니다.
// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;

//const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = configureStore({ 
  reducer: rootReducer, 
  middleware: middlewares,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
