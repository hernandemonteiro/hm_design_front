import { Link } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
import Button from "../../UI/Button";

export default function Menu() {
  const { logout } = useAuth();
  return (
    <nav>
      <Link to="/admin">
        <Button>Dashboard</Button>
      </Link>
      <Link to="/admin/categorias">
        <Button>Categorias</Button>
      </Link>
      <Link to="/admin/produtos">
        <Button>Produtos</Button>
      </Link>
      <Link to="/admin/clientes">
        <Button>Usuários</Button>
      </Link>
      <Link to="/admin/ordens">
        <Button>Ordens</Button>
      </Link>
      <Link to="/admin/producao">
        <Button>Em produção</Button>
      </Link>
      <Button className="red" onClick={logout}>Sair</Button>
    </nav>
  );
}
