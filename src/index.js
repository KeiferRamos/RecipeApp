import React from "react";
import ReactDOM from "react-dom";
import { App } from "./MainApp/App";
import { AppProvider } from "./GlobalContext/GlobalContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <AppProvider App={<App />} />
  </BrowserRouter>,
  document.getElementById("root")
);
