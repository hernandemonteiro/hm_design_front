import { SummarizeOutlined } from "@mui/icons-material";
import Button from "../../UI/Button";
import CardCart from "../../UI/CardCart";
import "./Cart.scss";

export default function Cart() {
  return (
    <div className="cart">
      <div className="cartList">
        <CardCart
          photo={"photo"}
          description={"description"}
          actions={<div>
            <SummarizeOutlined/>
            <SummarizeOutlined/>
          </div>}
          price={"R$25.00"}
        />
        <CardCart
          photo={"photo"}
          description={"description"}
          actions={<div>
            <SummarizeOutlined/>
            <SummarizeOutlined/>
          </div>}
          price={"R$25.00"}
        />
      </div>
      <div className="actions">
        <Button className="green">Ir Para Frete</Button>
      </div>
    </div>
  );
}
