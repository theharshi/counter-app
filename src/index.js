import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Counters from "./components/counters";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
