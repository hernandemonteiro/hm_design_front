import { useEffect } from "react";
import { useAuth } from "../../../Hooks/useAuth";
import Button from "../../UI/Button";
import ButtonLink from "../../UI/ButtonLink";
import Carroussel from "../../UI/Carrousell";
import "./ProductDetail.scss";

interface ProductDetailProps {
  image?: any;
  name: string;
  price: number;
  description: string;
  id: string;
}

export default function ProductDetail(props: ProductDetailProps) {
  const { authenticated } = useAuth();
  return (
    <div className="Detail">
      <Carroussel data={props.image}/>
      <div className="productName">
        <h2>{props.name}</h2>
      </div>
      <div className="productDescription">
        <p>{props.description}</p>
      </div>
      <div className="productPrice">
        <h1>R${props.price.toFixed(2)}</h1>
      </div>
      <div className="buttonsAction">
        {authenticated ? (
          <Button className="green" children="ADICIONAR AO CARRINHO" />
        ) : (
          <ButtonLink
            to="/login"
            className="green gradientHover"
            children="Fazer Login para comprar"
          />
        )}
      </div>
    </div>
  );
}
