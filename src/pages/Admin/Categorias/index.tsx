import { useEffect, useState } from "react";
import FormCategory from "../../../components/Admin/FormCategory";
import Template from "../../../components/Admin/Template";
import Button from "../../../components/UI/Button";
import ProductCard from "../../../components/Shop/ProductCard";

export default function Categoria() {
  const [categorys, setCategorys] = useState([]);
  const [categoryView, setCategoryView] = useState("Categorys List");
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/cart`)
      .then((response) => response.json())
      .then((response) => setCategorys(response.result))
      .catch((error) => console.log("Error: " + error.message));
  }, []);
  return (
    <Template>
      {categoryView === "Categorys List" ? (
        <>
          <Button onClick={() => setCategoryView("Category Register")}>
            Cadastrar Categoria
          </Button>
        </>
      ) : (
        <>
          <FormCategory />
          <Button className="red" onClick={() => setCategoryView("Categorys List")}>
            Cancelar
          </Button>
        </>
      )}
    </Template>
  );
}
