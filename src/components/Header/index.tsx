import React from "react";
import "./Header.scss";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="HeaderLogo">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <h1>HM Design</h1>
        </Link>
      </div>

      <div className="SearchBox">
        <div className="SearchLayout">
          <input type="search" placeholder="Buscar..." />
          <button>
            <SearchIcon className="Icon" sx={{ fontSize: 25 }} />
          </button>
        </div>
      </div>
      <div className="UserCart">
        <Link to="/login" style={{ color: "black" }}>
          <PersonIcon className="Icon" sx={{ fontSize: 40, margin: 2 }} />
        </Link>
        <Link to="/cart" style={{ color: "black" }}>
          <ShoppingCartIcon className="Icon" sx={{ fontSize: 40, margin: 2 }} />
        </Link>
      </div>
    </header>
  );
}
