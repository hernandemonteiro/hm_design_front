import { useAuth } from "../../../Hooks/useAuth";
import Button from "../../UI/Button";
import ButtonLink from "../../UI/ButtonLink";
import Nav from "../../UI/Nav";

export default function Menu() {
  const { logout } = useAuth();
  return (
    <Nav>
      <ButtonLink to="/admin" children="Dashboard" />
      <ButtonLink to="/admin/categorias" children="Categorias" />
      <ButtonLink to="/admin/produtos" children="Produtos" />
      <ButtonLink to="/admin/clientes" children="Usuários" />
      <ButtonLink to="/admin/ordens" children="Ordens" />
      <ButtonLink to="/admin/producao" children="Em produção" />
      <Button className="red" children="Sair" onClick={logout} />
    </Nav>
  );
}
