import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import appStore from './Store'



ReactDOM.render(<App store={appStore}/>, document.getElementById("root"));
