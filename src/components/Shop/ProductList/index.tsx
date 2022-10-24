import React from "react";
import usePagination from "../../../hooks/usePagination";
import ProductCard from "../../UI/ProductCard";
import {} from "./ProductList.scss";

interface ProductListProps {
  products?: any;
  message?: React.ReactNode;
}
interface productsArrayElement {
  _id: string;
  images: string;
  name: string;
  price: number;
}

export default function ProductList(props: ProductListProps) {
  const { pagination, buttonPaginate } = usePagination(9);
  return (
    <div className="productList">
      {props.products.length === 0 && props.message}
      {props.products
        .slice(0, pagination)
        .map(
          (element: productsArrayElement) => (
            <ProductCard
              key={element._id}
              img={JSON.parse(element.images)[0].id}
              name={element.name}
              price={element.price}
              id={element._id}
            />
          )
        )}
      {buttonPaginate(props.products.length)}
    </div>
  );
}
