import { useEffect } from "react";
import FormProduct from "../../../components/Admin/FormProduct";
import Template from "../../../components/Admin/Template";
import Button from "../../../components/UI/Button";
import ProductCard from "../../../components/UI/ProductCard";
import usePagination from "../../../Hooks/usePagination";
import useProducts from "../../../Hooks/useProducts";

export default function ProductRegister() {
  const { productsFetch, productsView, setProductsView, products } =
    useProducts();
  const { pagination, buttonPaginate } = usePagination(15);
  useEffect(productsFetch, []);
  return (
      <FormProduct />
  );
}
