import { Link, useParams } from "react-router-dom";
import Button from "../../UI/Button";
import Nav from "../../UI/Nav";

export default function Menu() {
  return (
    <Nav>
      <Link to="/">
        <Button>Inicio</Button>
      </Link>
      <Link to="/category/Cartão de visita">
        <Button>Cartão de visita</Button>
      </Link>
    </Nav>
  );
}
