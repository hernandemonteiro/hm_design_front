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
          <Button
            className="green"
            children="Cadastrar Categoria"
            onClick={() => setCategoryView("Category Register")}
          />
          <CategoryList />
        </>
      ) : (
        <>
          <FormCategory />
          <Button
            className="red"
            children="voltar"
            onClick={() => setCategoryView("Categorys List")}
          />
        </>
      )}
    </Template>
  );
}
