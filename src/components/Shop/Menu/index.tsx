import React, { useEffect } from "react";
import useProducts from "../../../Hooks/useProducts";
import Button from "../../UI/Button";
import ButtonLink from "../../UI/ButtonLink";
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
      <ButtonLink to={"/"}>Inicio</ButtonLink>
      {categorys.map((element) => (
        <ButtonLink key={0} to={`/category/${element}`}>
          {element}
        </ButtonLink>
      ))}
    </Nav>
  );
}
