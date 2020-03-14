import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

import LoadingPage from "./pages/LoadingPage";

const jsx = <AppRouter />;
console.log("test");
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

setTimeout(() => {
  renderApp();
}, 1000);
