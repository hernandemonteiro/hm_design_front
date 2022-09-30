import React from "react";
import { useGlobalStates } from "../../../providers/useGlobalStates";
import Button from "../../UI/Button";
import ButtonLink from "../../UI/ButtonLink";
import Nav from "../../UI/Nav";

export default function Menu() {
  const { logout } = useGlobalStates();
  return (
    <Nav>
      <ButtonLink to="/admin">Dashboard</ButtonLink>
      <ButtonLink to="/admin/categorias">Categorias</ButtonLink>
      <ButtonLink to="/admin/produtos">Produtos</ButtonLink>
      <ButtonLink to="/admin/clientes">Usuários</ButtonLink>
      <ButtonLink to="/admin/ordens">Ordens</ButtonLink>
      <ButtonLink to="/admin/producao">Em produção</ButtonLink>
      <Button className="red" onClick={logout}>Sair</Button>
    </Nav>
  );
}
