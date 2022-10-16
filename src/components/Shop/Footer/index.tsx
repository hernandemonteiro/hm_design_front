import React from "react";
import {} from "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="FooterLogo">
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          <h1>HM Design</h1>
        </a>
      </div>
      <div className="infoBusiness"></div>
      <div className="selos"></div>
    </footer>
  );
}
