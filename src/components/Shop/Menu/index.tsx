import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import Nav from "../../UI/Nav";

export default function Menu() {
  return (
    <Nav>
      <Link to="/">
        <Button>Inicial</Button>
      </Link>
    </Nav>
  );
}
