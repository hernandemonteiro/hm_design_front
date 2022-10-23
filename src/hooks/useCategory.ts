import { FormEvent, useState } from "react";
import useToken from "./useToken";

export default function useCategory() {
  const [categorys, setCategorys] = useState([]);
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  
  function registerCategory(event: FormEvent) {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_API_URL}/category/register/${category}`, {
      method: "PUT",
      headers: {
        "x-access-token": useToken(),
      },
    })
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
    fetch(`${import.meta.env.VITE_API_URL}/categorys`, {
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => setCategorys(response))
      .catch((error: string) => console.log("categorys Error Db:" + error));
  }

  function deleteCategory(id: string) {
    fetch(`${import.meta.env.VITE_API_URL}/category/${id}`, {
      method: "DELETE",
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => {
        console.log(response.status);
        categoryFetch();
      })
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
