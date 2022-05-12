// to transpile the ES6 to a lower machine level
import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("app"));
