import { useState } from "react";
import Dashboard from "../../../components/Admin/Dashboard";
import Products from "../../../components/Admin/Products";
import ButtonGradient from "../../../components/Shop/ButtonGradient";
import { useAuth } from "../../../providers/useAuth";
import "./Admin.scss";

export default function Admin() {
  const [view, setView] = useState(<Dashboard />);
  // const { user, setUser } = useAuth();
  // if (user.isLogged == false) {
  //   window.location.href = "/login";
  // }

  return (
    <section className="AdminPage">
      <nav>
        <ButtonGradient
          onClick={() => setView(<Dashboard />)}
        >
          Dashboard
        </ButtonGradient>
        <br />
        <br />
        <ButtonGradient
          onClick={() => setView(<Products />)}
        >
          Products
        </ButtonGradient>
        <br />
        <br />
        <ButtonGradient
          onClick={() => setView(<Products />)}
        >
          Clientes
        </ButtonGradient>
        <br />
        <br />
        <ButtonGradient
          onClick={() => setView(<Products />)}
        >
          Ordens
        </ButtonGradient>
        <br />
        <br />
        <ButtonGradient
          onClick={() => setView(<Products />)}
        >
          Categorias
        </ButtonGradient>
        <br />
        <br />
        <ButtonGradient
          onClick={() => setView(<Products />)}
        >
          Em produção
        </ButtonGradient>
        <br />
        <br />
        <ButtonGradient
          onClick={() => setView(<Products />)}
        >
          Sair
        </ButtonGradient>
      </nav>
      <main className="mainAdmin">{view}</main>
    </section>
  );
}
