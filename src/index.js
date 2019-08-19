import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider, connect } from "react-redux";
import rootReducer from "./store/reducers";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchLogUser } from "./store/saga/user/saga";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchLogUser);

const ConnectedApp = connect(state => {
  return state;
})(App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  rootElement
);
