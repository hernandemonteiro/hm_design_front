import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./ProductCard.scss";

interface ProductCardProps {
  image?: string;
  name: string;
  price: number;
  id: string;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <div className="card">
      <div className="imageCard">
        <img src="https://www.datocms-assets.com/76860/1660532346-product_hm_design.png" />
      </div>
      <div className="productName">
        <h3>{props.name}</h3>
      </div>
      <div className="productPrice">
        <h2>R${props.price}</h2>
      </div>
        <Link to={`/details/${props.id}`}>
          <Button className="green gradientHover">Detalhes</Button>
        </Link>
    </div>
  );
}