import React, { useState } from "react";
import Button from "../Button";
import "./Nav.scss";

interface NavProps {
  children: React.ReactNode;
}

export default function Nav(props: NavProps) {
  const [dropdown, setDropdown] = useState("menuMobile");

  function MenuDropdown() {
    if (dropdown == "menuMobile") {
      setDropdown("");
    } else {
      setDropdown("menuMobile");
    }
  }

  return (
    <nav>
      <Button className={`btnMobile btnMenu`} onClick={() => MenuDropdown()}>
        MENU
      </Button>
      <div className={`${dropdown} boxMenu`}>{props.children}</div>
    </nav>
  );
}
