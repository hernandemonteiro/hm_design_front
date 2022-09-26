import { useEffect } from "react";
import { useAuth } from "../../../Hooks/useAuth";
import Button from "../../UI/Button";
import ButtonLink from "../../UI/ButtonLink";
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
  const images: any = props.image;
  return (
    <div className="Detail">
      <div className="imageDetail">
        {images ?
        JSON.parse(images).map((element: any) => {
          return (
            <img
              width="60%"
              src={"https://drive.google.com/uc?export=view&id=" + element.id}
            />
          );
        }) : ""}
      </div>
      <div className="productName">
        <h2>{props.name}</h2>
      </div>
      <div className="productDescription">
        <p>{props.description}</p>
      </div>
      <div className="productPrice">
        <h1>R${props.price}</h1>
      </div>
      <div className="buttonsAction">
        {authenticated ? (
          <Button children="ADICIONAR AO CARRINHO" />
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
