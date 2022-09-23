import { useState } from "react";
import useToken from "./useToken";

export default function useCategory() {
  const [categorys, setCategorys] = useState([]);
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  function registerCategory(event: any) {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_API_URL}/category/register/${category}`, {
      method: "PUT",
        headers: {
          "x-access-token": useToken(),
        },
    
    }).then(() => {
      setMessage("Cadastrado com sucesso!");
      setCategory("");
    });
  }
  function categoryFetch() {
    fetch(`${import.meta.env.VITE_API_URL}/categorys`, {
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => setCategorys(response.result))
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
      .catch((error: string) => console.log("categorys Error delete:" + error));
  }
  return {
    message,
    category,
    categorys,
    setMessage,
    setCategory,
    registerCategory,
    categoryFetch,
    deleteCategory
  }
}