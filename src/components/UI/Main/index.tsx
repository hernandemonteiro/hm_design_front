import React from "react";
import "./Main.scss";

interface MainProps {
  children?: JSX.Element;
}

export default function Main(props: MainProps) {
  return <main>{props.children}</main>;
}
