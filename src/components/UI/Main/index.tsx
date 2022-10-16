import React from "react";
import ScrollToTop from "../ScrollToTop";
import "./Main.scss";

interface MainProps {
  children?: JSX.Element;
}

export default function Main(props: MainProps) {
  return (
    <main>
      {props.children}
      <ScrollToTop />
    </main>
  );
}
