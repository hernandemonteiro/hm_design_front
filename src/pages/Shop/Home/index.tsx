import ProductCard from "../../../components/UI/ProductCard";
import Template from "../../../components/Shop/Template";
import { useEffect, useState } from "react";
import usePagination from "../../../Hooks/usePagination";
import useToken from "../../../Hooks/useToken";
import { useParams } from "react-router-dom";

/* @description the first page rendered, list products in sort order
 *  @route = "/"
 */
export default function Home() {
  const [products, setProducts] = useState([]);
  const { pagination, buttonPaginate } = usePagination(12);
  const search = useParams().search;
  const category = useParams().category;
  useEffect(() => { 
    // usar search aqui para definir buscas e no back-end mudar buscas;  
    fetch(`${import.meta.env.VITE_API_URL}/products`, {
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => setProducts(response.result))
      .catch((error) => console.log("Error: " + error.message));
  }, []);

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
