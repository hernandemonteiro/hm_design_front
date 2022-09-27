import "./Header.scss";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useGlobalStates } from "../../../Hooks/useGlobalStates";
import { ExitToApp } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { useState } from "react";

export default function Header() {
  const { user, logout } = useGlobalStates();
  const [search, setSearch] = useState("");

  function searchRedirect(event: any) {
    event.preventDefault();
    window.location.href = `/${search}`;
  }
  return (
    <header>
      <div className="HeaderLogo">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <h1>HM Design</h1>
        </Link>
      </div>
      <form className="formSearch" onSubmit={searchRedirect}>
        <div className="SearchBox">
          <div className="SearchLayout">
            <input
              type="search"
              required
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar..."
            />
            <button type="submit">
              <SearchIcon className="Icon" sx={{ fontSize: 25 }} />
            </button>
          </div>
        </div>
      </form>
      <div className="UserCart">
        {!user ? (
          <Link to="/login" style={{ color: "black" }}>
            <PersonIcon className="Icon" sx={{ fontSize: 40, margin: 2 }} />
          </Link>
        ) : (
          <Link to="/user" style={{ color: "black" }}>
            <PersonIcon className="Icon" sx={{ fontSize: 40, margin: 2 }} />
          </Link>
        )}
        {user && (
          <>
            <Link to="/cart" style={{ color: "black" }}>
              <Badge badgeContent={2} color="warning" sx={{ margin: 2 }}>
                <ShoppingCartIcon className="Icon" sx={{ fontSize: 40 }} />
              </Badge>
            </Link>
            <ExitToApp
              className="Icon"
              onClick={logout}
              sx={{ fontSize: 40, margin: 2 }}
            />
          </>
        )}
      </div>
    </header>
  );
}
