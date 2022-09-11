import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Menu from "../Menu";
import "./Template.scss";

/* @descrition TemplateProps : this interface create the types
 * for traditional React props;
 */
interface TemplateProps {
  children?: any;
}

/* @component Template is the base view for all pages in the application;
 * @params children : allow change the content in the principal box View;
 */

export default function Template(props: TemplateProps) {
  return (
    <div className="container">
      <Header />
      <Menu />
      <div className="boxContent">{props.children}</div>
      <Footer />
    </div>
  );
}