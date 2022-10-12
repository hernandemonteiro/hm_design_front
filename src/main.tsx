import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Loader from "./components/UI/Loader";
import Main from "./components/UI/Main";
import Router from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Main>
      <Router />
    </Main>
);
