import React from "react";
import ButtonLink from "../ButtonLink";
import "./ProductCard.scss";

interface ProductCardProps {
  image?: string;
  name: string;
  price: number;
  id: string;
  img: string;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <div className="card">
      <div className="imageCard">
        <img src={"https://drive.google.com/uc?export=view&id=" + props.img} />
      </div>
      <div className="productName">
        <h3>{props.name}</h3>
      </div>
      <div className="productPrice">
        <h2>R${props.price}</h2>
      </div>
      <ButtonLink to={`/details/${props.id}`} className="green">
        Detalhes
      </ButtonLink>
    </div>
  );
}
