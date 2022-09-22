import Button from "../../UI/Button";
import Nav from "../../UI/Nav";

export default function Menu() {
  return (
    <Nav>
      {/* using window.location to change the page and the view of the menu; */}
      <Button onClick={() => (window.location.href = "/")} children="Inicio" />
      <Button
        onClick={() => (window.location.href = "/category/Cartão de visita")}
        children={"Cartões de visita"}
      />
    </Nav>
  );
}
