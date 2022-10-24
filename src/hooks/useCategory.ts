import { FormEvent, useState } from "react";
import { errorCase, fetchAPI } from "./helpers/fetchAPI";

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
      .catch((error) => errorCase(error));
  }

  function categoryFetch() {
    fetchAPI("/categorys", "GET")
      .then((response) => setCategorys(response))
      .catch((error) => errorCase(error));
  }

  function deleteCategory(id: string) {
    fetchAPI(`/category/${id}`, "DELETE")
      .then(() => categoryFetch())
      .catch((error) => errorCase(error));
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
