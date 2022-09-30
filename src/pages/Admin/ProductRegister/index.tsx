import React, { useEffect } from "react";
import FormProduct from "../../../components/Admin/FormProduct";
import useProducts from "../../../Hooks/useProducts";

export default function ProductRegister() {
  const { productsFetch } = useProducts();
  useEffect(productsFetch, []);
  return <FormProduct />;
}
