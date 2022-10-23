import ProductDetail from "../../../components/Shop/ProductDetail";
import Template from "../../../components/Shop/Template";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";

export default function Details() {
  const id = useParams().id;
  const {products, productID} = useProducts();
  useEffect(() => productID(id), []);
  return (
    <Template>
      <ProductDetail
        image={products.images}
        description={products.description}
        name={products.name}
        price={products.price}
        id={products._id}
      />
    </Template>
  );
}
