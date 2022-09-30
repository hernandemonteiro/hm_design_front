import React, { useEffect } from "react";
import useProducts from "../../../Hooks/useProducts";
import Button from "../../UI/Button";
import Nav from "../../UI/Nav";

export default function Menu() {
  const { products, productsFetch } = useProducts();
  useEffect(productsFetch, []);
  const categorys = [
    ...new Set(
      products.map((element: { category: string }) => element.category)
    ),
  ];
  return (
    <Nav>
      {/* using window.location to change the page and the view of the menu; */}
      <Button onClick={() => (window.location.href = "/")}>Inicio</Button>
      {categorys.map((element) => (
        <Button
          key={0}
          onClick={() => (window.location.href = `/category/${element}`)}
        >
          {element}
        </Button>
      ))}
    </Nav>
  );
}
