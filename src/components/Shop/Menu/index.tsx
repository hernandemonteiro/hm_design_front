import React, { useState } from "react";
import "./Menu.scss";
import { Link } from "react-router-dom";
import ButtonGradient from "../ButtonGradient";

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
      <ButtonGradient className={`btnMobile btnMenu`} onClick={() => MenuDropdown()}>
        MENU
      </ButtonGradient>
      <div className={`${dropdown} boxMenu`}>
        <Link to="/" onClick={() => MenuDropdown()}>
          <ButtonGradient>Inicial</ButtonGradient>
        </Link>
      </div>
    </nav>
  );
}
