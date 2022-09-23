import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePagination from "../../../Hooks/usePagination";
import useProducts from "../../../Hooks/useProducts";
import ProductCard from "../../UI/ProductCard";
import "./ProductList.scss";

export default function ProductList() {
  const { products, productsFetch, productsCategoryFetch } = useProducts();
  const { pagination, buttonPaginate } = usePagination(12);
  const category = useParams().category;
  const search = useParams().search;

  useEffect(() => {
    category ? productsCategoryFetch(category):
    search ? alert(search):
    productsFetch();
  }, []);

  return (
    <div className="productList">
      {products.slice(0, pagination).map((element: any) => (
        <ProductCard
          name={element.name}
          price={element.price}
          id={element._id}
        />
      ))}
      {buttonPaginate(products.length)}
    </div>
  );
}
