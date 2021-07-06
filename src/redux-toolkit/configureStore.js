import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import Quiz from "./modules/qnaList";
import Fish from "./modules/fishList";
import User from "./modules/users";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  qnaList: Quiz,
  fishList: Fish,
  users:User,
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

let store = configureStore({ 
  reducer: rootReducer, 
  middleware: middlewares,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
