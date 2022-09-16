import { Route } from "react-router-dom";
import Cart from "../../pages/Shop/Cart";
import Details from "../../pages/Shop/Details";
import Home from "../../pages/Shop/Home";

export default function ShopRoutes() {
  return (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/details/:id" element={<Details />} />
    </>
  );
}
