import React from "react";
import Menu from "../Menu";
import {} from "./Template.scss";

interface TemplateProps {
  children: React.ReactNode;
}

export default function Template(props: TemplateProps) {
  return (
    <section className="AdminPage">
      <Menu />
      <main className="mainAdmin">{props.children}</main>
    </section>
  );
}
