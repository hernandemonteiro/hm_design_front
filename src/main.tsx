import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import AppRouter from "./routes";
interface MainProps {
  children?: any;
}

export const Main = (props: MainProps) => {
  return <main>{props.children}</main>;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Main>
      <AppRouter />
    </Main>
);
