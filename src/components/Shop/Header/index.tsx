import React from "react";
import "./Header.scss";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useAuth } from "../../../providers/useAuth";
import { ExitToApp } from "@mui/icons-material";

export default function Header() {
  const {user, logout} = useAuth();
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
        { !user ?
          <Link to="/login" style={{ color: "black" }}>
          <PersonIcon className="Icon" sx={{ fontSize: 40, margin: 2 }} />
        </Link>
        :
        <Link to="/user" style={{ color: "black" }}>
          <PersonIcon className="Icon" sx={{ fontSize: 40, margin: 2 }} />
        </Link>
        }
        
        <Link to="/cart" style={{ color: "black" }}>
          <ShoppingCartIcon className="Icon" sx={{ fontSize: 40, margin: 2 }} />
        </Link>
        { user &&
          <ExitToApp className="Icon" onClick={logout} sx={{ fontSize: 40, margin: 2 }} />
        }
      </div>
    </header>
  );
}
