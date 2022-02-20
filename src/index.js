import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Store/store"
// import store from './Redux/Store'


ReactDOM.render(
  <React.StrictMode>
    <App
      addEmail={store.addEmail.bind(store)}
      medokMap={store.getMedokMap()}
      state={store.getState()} />
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
