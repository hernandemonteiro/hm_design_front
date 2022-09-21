import ProductDetail from "../../../components/Shop/ProductDetail";
import Template from "../../../components/Shop/Template";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useToken from "../../../Hooks/useToken";
import useProducts from "../../../Hooks/useProducts";

export default function Details() {
  const id = useParams().id;
  const {products, productID} = useProducts();
  useEffect(() => productID(id), []);
  return (
    <Template>
      <ProductDetail
        description={products.description}
        name={products.name}
        price={products.price}
        id={products._id}
      />
    </Template>
  );
}
