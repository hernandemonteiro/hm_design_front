import { useEffect } from "react";
import FormProduct from "../../../components/Admin/FormProduct";
import Template from "../../../components/Admin/Template";
import Button from "../../../components/UI/Button";
import ProductCard from "../../../components/UI/ProductCard";
import usePagination from "../../../Hooks/usePagination";
import useProducts from "../../../Hooks/useProducts";

export default function Produtos() {
  const { productsFetch, productsView, setProductsView, products } =
    useProducts();
  const { pagination, buttonPaginate } = usePagination(15);
  useEffect(productsFetch, []);
  return (
    <Template>
      {productsView === "Products List" ? (
        <>
          <Button
            children="Cadastrar Produto"
            onClick={() => setProductsView("Product Register")}
          />
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
            children="Cancelar"
            onClick={() => setProductsView("Products List")}
          />
        </>
      )}
    </Template>
  );
}
