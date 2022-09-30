import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/UI/Main";
import Router from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Main>
    <Router />
  </Main>
);
