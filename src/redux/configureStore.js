import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import quiz from "./modules/quiz";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  quiz: quiz,
  router: connectRouter(history),
});

const middlewares = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

let store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
