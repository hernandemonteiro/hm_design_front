import { useEffect, useState } from "react";
import FormProduct from "../../../components/Admin/FormProduct";
import Template from "../../../components/Admin/Template";
import ProductCard from "../../../components/Shop/ProductCard";

export default function Produtos() {
  const [products, setProducts] = useState([]);
  const [productsView, setProductsView] = useState("Products List");
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((response) => response.json())
      .then((response) => setProducts(response.result))
      .catch((error) => console.log("Error: " + error.message));
  }, []);
  return (
    <Template>
      {productsView === "Products List" ? (
        <>
          <button onClick={() => setProductsView("Product Register")}>Cadastrar Produto</button>
          {products.map((element: any) => (
            <ProductCard
              name={element.name}
              price={element.price}
              id={element._id}
            />
          ))}
        </>
      ) : (
        <FormProduct />
      )}
    </Template>
  );
}
