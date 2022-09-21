import ButtonLink from "../../UI/ButtonLink";
import Nav from "../../UI/Nav";

export default function Menu() {
  return (
    <Nav>
      <ButtonLink to="/" children="Inicio" />
      <ButtonLink to="/category/Cartão de visita" children="Cartão de visita" />
    </Nav>
  );
}
