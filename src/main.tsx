import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.scss";
import AppRouter from "./routes";
interface MainProps {
  children?: any;
}

export const Main = (props: MainProps) => {
  return <main>{props.children}</main>;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Main>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Main>
  </React.StrictMode>
);
