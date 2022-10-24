import { FormEvent, useState } from "react";
import { fetchAPI } from "./helpers/fetchAPI";

export default function useCategory() {
  const [categorys, setCategorys] = useState([]);
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  function registerCategory(event: FormEvent) {
    event.preventDefault();
    fetchAPI(`/category/register/${category}`, "PUT")
      .then(() => {
        setMessage("Cadastrado com sucesso!");
        setCategory("");
      })
      .catch((error) => {
        setMessage("Erro: contate seu desenvolvedor!");
        console.log("Error: " + error);
      });
  }

  function categoryFetch() {
    fetchAPI("/categorys", "GET")
      .then((response) => setCategorys(response))
      .catch((error) => console.log("categorys Error Db:" + error));
  }

  function deleteCategory(id: string) {
    fetchAPI(`/category/${id}`, "DELETE")
      .then(() => categoryFetch())
      .catch((error) => console.log("categorys Error delete:" + error));
  }
  return {
    message,
    category,
    categorys,
    setMessage,
    setCategory,
    registerCategory,
    categoryFetch,
    deleteCategory,
  };
}
