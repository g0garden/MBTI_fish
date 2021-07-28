import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./shared/App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store from "./redux-toolkit/configureStore";

import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById("root")
// );

if (document.getElementById("root").hasChildNodes()) {
  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
} else {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
