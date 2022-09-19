import ProductCard from "../../../components/Shop/ProductCard";
import Template from "../../../components/Shop/Template";
import { useEffect, useState } from "react";
import usePagination from "../../../Hooks/usePagination";

/* @description the first page rendered, list products in sort order
 *  @route = "/"
 */
export default function Home() {
  const [products, setProducts] = useState([]);
  const { pagination, buttonPaginate } = usePagination(12);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products` )
      .then((response) => response.json())
      .then((response) => setProducts(response.result))
      .catch((error) => console.log("Error: " + error));
  }, []);

  return (
    <Template>
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
