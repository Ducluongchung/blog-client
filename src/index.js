import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./redux/reducer";
import mySaga from "./redux/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
