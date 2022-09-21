import ProductCard from "../../../components/UI/ProductCard";
import Template from "../../../components/Shop/Template";
import { useEffect, useState } from "react";
import usePagination from "../../../Hooks/usePagination";
import useToken from "../../../Hooks/useToken";
import { useParams } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";

/* @description the first page rendered, list products in sort order
 *  @route = "/"
 */
export default function Home() {
  const {products, productsFetch} = useProducts();
  const { pagination, buttonPaginate } = usePagination(12);
  const search = useParams().search;
  const category = useParams().category;
  useEffect(productsFetch, []);

  return (
    <Template>
      {category}
      {products.slice(0, pagination).map((element: any) => (
        <ProductCard
          name={element.name}
          price={element.price}
          id={element._id}
        />
      ))}
      {buttonPaginate(products.length)}
    </Template>
  );
}
