import React, { FormEvent, useState } from "react";
import {} from "./Header.scss";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useGlobalStates } from "../../../providers/useGlobalStates";
import { ExitToApp } from "@mui/icons-material";
import Badge from "@mui/material/Badge";

export default function Header() {
  const { user, logout } = useGlobalStates();
  const [search, setSearch] = useState("");

  function searchRedirect(event: FormEvent) {
    event.preventDefault();
    window.location.href = `/${search}`;
  }
  return (
    <header>
      <div className="HeaderLogo">
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          <h1>HM Design</h1>
        </a>
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
          <a href="/login" style={{ color: "black" }}>
            <PersonIcon className="Icon" sx={{ fontSize: 40, margin: 2 }} />
          </a>
        ) : (
          <a href="/user" style={{ color: "black" }}>
            <PersonIcon className="Icon" sx={{ fontSize: 40, margin: 2 }} />
          </a>
        )}
        {user && user.type == "1" ? (
          <a href="/cart" style={{ color: "black" }}>
            <Badge badgeContent={2} color="warning" sx={{ margin: 2 }}>
              <ShoppingCartIcon className="Icon" sx={{ fontSize: 40 }} />
            </Badge>
          </a>
        ) : (
          ""
        )}
        {user && (
          <ExitToApp
            className="Icon"
            onClick={logout}
            sx={{ fontSize: 40, margin: 2 }}
          />
        )}
      </div>
    </header>
  );
}
