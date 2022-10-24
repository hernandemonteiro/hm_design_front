import React from "react";
import {} from "./TitleHome.scss";

interface titleHomeProps {
  title: string;
}
export default function TitleHome(props: titleHomeProps) {
  return (
    <div className="Title">
      <h1>{props.title}</h1>
      <hr />
      <br />
    </div>
  );
}
