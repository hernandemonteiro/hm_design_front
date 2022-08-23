import ProductCard from "../../components/ProductCard";
import Template from "../../components/Template";
import { useEffect } from "react";

/* @description the first page rendered, list products in sort order
 *  @route = "/"
 */

export default function Home() {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((response) =>
        response.json().then((response) => console.log(response.result))
      )
      .catch((error) => console.log("Error: " + error.message));
  }, []);
  return (
    <Template>
      <ProductCard name={"element.name"} price={15} id={"element._id"} />
    </Template>
  );
}
