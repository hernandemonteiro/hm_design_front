import { useAuth } from "../../../Hooks/useAuth";
import Button from "../../UI/Button";
import ButtonLink from "../../UI/ButtonLink";
import "./ProductDetail.scss";

interface ProductDetailProps {
  image?: string;
  name: string;
  price: number;
  description: string;
  id: string;
}

export default function ProductDetail(props: ProductDetailProps) {
  const { authenticated } = useAuth();
  return (
    <div className="Detail">
      <div className="imageDetail">
        <img
          width="60%"
          src="https://www.datocms-assets.com/76860/1660532346-product_hm_design.png"
        />
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
