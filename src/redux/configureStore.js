import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import Quiz from "./modules/quiz";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  quiz: Quiz,
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
