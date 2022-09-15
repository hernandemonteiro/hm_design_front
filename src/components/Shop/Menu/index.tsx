import React, { useState } from "react";
import "./Menu.scss";
import { Link } from "react-router-dom";
import Button from "../Button";

export default function Menu() {
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
      <div className={`${dropdown} boxMenu`}>
        <Link to="/" onClick={() => MenuDropdown()}>
          <Button>Inicial</Button>
        </Link>
      </div>
    </nav>
  );
}
