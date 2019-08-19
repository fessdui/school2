import React from "react";
import ReactDOM from "react-dom";
import App from "./components/AppConteiner";
import { Provider, connect } from "react-redux";
import rootReducer from "./store/reducers";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchFetchDog } from "./store/saga/saga";
import logger from "redux-logger";

import "./styles.css";
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(watchFetchDog);

const ConnectedApp = connect(state => {
  console.log(state, "State");
  return state;
})(App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  rootElement
);
