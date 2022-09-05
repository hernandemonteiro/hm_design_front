import ProductCard from "../../components/ProductCard";
import Template from "../../components/Template";
import { useEffect, useState } from "react";

/* @description the first page rendered, list products in sort order
 *  @route = "/"
 */

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((response) => response.json())
      .then((response) => setData(response.result))
      .catch((error) => console.log("Error: " + error.message));
  }, []);

  return (
    <Template>
      {data.map((element: any) => (
        <ProductCard
          name={element.name}
          price={element.price}
          id={element._id}
        />
      ))}
    </Template>
  );
}
