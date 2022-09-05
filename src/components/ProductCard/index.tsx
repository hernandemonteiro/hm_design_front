import React from "react";
import { Link } from "react-router-dom";
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
        <h2>{props.name}</h2>
      </div>
      <div className="productPrice">
        <h1>R${props.price}</h1>
      </div>
      <Link to={`/Details/${props.id}`}>
        <div className="buttonsAction">
          <button>Detalhes</button>
        </div>
      </Link>
    </div>
  );
}
