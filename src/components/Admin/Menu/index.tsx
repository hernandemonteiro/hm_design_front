import { Link } from "react-router-dom";
import { useAuth } from "../../../providers/useAuth";
import ButtonGradient from "../../Shop/ButtonGradient";

export default function Menu() {
  const { logout } = useAuth();
  return (
    <nav>
      <Link to="/admin">
        <ButtonGradient>Dashboard</ButtonGradient>
      </Link>
      <br />
      <Link to="/admin/categorias">
        <ButtonGradient>Categorias</ButtonGradient>
      </Link>
      <br />
      <Link to="/admin/produtos">
        <ButtonGradient>Produtos</ButtonGradient>
      </Link>
      <br />
      <Link to="/admin/clientes">
        <ButtonGradient>Usuários</ButtonGradient>
      </Link>
      <br />
      <Link to="/admin/ordens">
        <ButtonGradient>Ordens</ButtonGradient>
      </Link>
      <br />

      <Link to="/admin/producao">
        <ButtonGradient>Em produção</ButtonGradient>
      </Link>
      <br />
      <ButtonGradient onClick={logout}>Sair</ButtonGradient>
    </nav>
  );
}
