import { Link } from "react-router-dom";
import { useAuth } from "../../../providers/useAuth";
import Button from "../../Shop/Button";

export default function Menu() {
  const { logout } = useAuth();
  return (
    <nav>
      <Link to="/admin">
        <Button>Dashboard</Button>
      </Link>
      <br />
      <Link to="/admin/categorias">
        <Button>Categorias</Button>
      </Link>
      <br />
      <Link to="/admin/produtos">
        <Button>Produtos</Button>
      </Link>
      <br />
      <Link to="/admin/clientes">
        <Button>Usuários</Button>
      </Link>
      <br />
      <Link to="/admin/ordens">
        <Button>Ordens</Button>
      </Link>
      <br />

      <Link to="/admin/producao">
        <Button>Em produção</Button>
      </Link>
      <br />
      <Button className="red" onClick={logout}>Sair</Button>
    </nav>
  );
}
