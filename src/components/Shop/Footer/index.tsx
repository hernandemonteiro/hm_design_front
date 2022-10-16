import React from "react";
import { Link } from "react-router-dom";
import {} from "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="FooterLogo">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <h1>HM Design</h1>
        </Link>
      </div>
      <div className="infoBusiness"></div>
      <div className="selos"></div>
    </footer>
  );
}
