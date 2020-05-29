import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";

import { Router, browserHistory } from "react-router";
import routes from "./routes";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";
import jwtDecode from "jwt-decode";

const store = createStore(reducers, applyMiddleware(thunk));
const token = localStorage.getItem("access_token");
if (token) {
  const decodeToken = jwtDecode(token);
  store.dispatch({
    type: "AUTH_USER",
    payload: decodeToken,
  });
} else {
  browserHistory.push("signin");
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
