import { useState } from "react";
import FormCategory from "../../../components/Admin/FormCategory";
import Template from "../../../components/Admin/Template";
import Button from "../../../components/UI/Button";
import CategoryList from "../../../components/Admin/CategoryList";

export default function Categoria() {
  const [categoryView, setCategoryView] = useState("Categorys List");
  return (
    <Template>
      {categoryView === "Categorys List" ? (
        <>
          <Button onClick={() => setCategoryView("Category Register")}>
            Cadastrar Categoria
          </Button>
          <CategoryList />
        </>
      ) : (
        <>
          <FormCategory />
          <Button className="red" onClick={() => setCategoryView("Categorys List")}>
            voltar
          </Button>
        </>
      )}
    </Template>
  );
}
