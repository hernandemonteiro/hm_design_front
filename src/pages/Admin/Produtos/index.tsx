import { useEffect, useState } from "react";
import FormProduct from "../../../components/Admin/FormProduct";
import Template from "../../../components/Admin/Template";
import Button from "../../../components/UI/Button";
import ProductCard from "../../../components/Shop/ProductCard";
import usePagination from "../../../Hooks/usePagination";

export default function Produtos() {
  const [products, setProducts] = useState([]);
  const [productsView, setProductsView] = useState("Products List");
  const { pagination, buttonPaginate } = usePagination(15);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/${import.meta.env.VITE_HASH_SECRET}/products`)
      .then((response) => response.json())
      .then((response) => setProducts(response.result))
      .catch((error) => console.log("Error: " + error.message));
  }, [products]);
  return (
    <Template>
      {productsView === "Products List" ? (
        <>
          <Button onClick={() => setProductsView("Product Register")}>
            Cadastrar Produto
          </Button>
          {products.slice(0, pagination).map((element: any) => (
            <ProductCard
              name={element.name}
              price={element.price}
              id={element._id}
            />
          ))}
          {buttonPaginate(products.length)}
        </>
      ) : (
        <>
          <FormProduct />
          <Button
            className="red"
            onClick={() => setProductsView("Products List")}
          >
            Cancelar
          </Button>
        </>
      )}
    </Template>
  );
}
