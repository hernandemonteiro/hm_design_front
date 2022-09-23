import { useState } from "react";
import useToken from "./useToken";

export default function useProducts() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string | number>("");
  const [options, setOptions] = useState([]);
  const [category, setCategory] = useState<string>("");
  const [pictures, setPictures] = useState<any>("");
  const [description, setDescription] = useState<string>("");
  const [option, setOption] = useState("");
  const [priceOption, setPriceOption] = useState(0.0);
  const [arrayOption, setArrayOption] = useState<any>([]);
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState<any>([]);
  const [productsView, setProductsView] = useState("Products List");

 

  function productsCategoryFetch(category: string | undefined) {
    fetch(`${import.meta.env.VITE_API_URL}/products/category/${category}`, {
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => setProducts(response.result))
      .catch((error) => console.log("Error: " + error.message));
  }

  function productsSearchFetch(search: string | undefined){
    fetch(`${import.meta.env.VITE_API_URL}/products/search/${search}`, {
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => setProducts(response.result))
      .catch((error) => console.log("Error: " + error.message));
  }

  function productsFetch() {
    fetch(`${import.meta.env.VITE_API_URL}/products`, {
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => setProducts(response.result))
      .catch((error) => console.log("Error: " + error.message));
  }
  
  function addOption() {
    arrayOption.push({ option, priceOption });
    setOptions(arrayOption);
    console.table(options);
    setOption("");
  }

  function registerProduct(event: any) {
    event.preventDefault();
    fetch(
      `${
        import.meta.env.VITE_API_URL
      }/product/register/${name}/${price}/${pictures}/${description}/${category}/${JSON.stringify(
        options
      )}`,
      {
        method: "PUT",
        headers: {
          "x-access-token": useToken(),
        },
      }
    ).then((response) => {
      console.log(response);
      setMessage("Cadastrado com sucesso!");
    });
  }
  function productID(id: string | undefined) {
    fetch(`${import.meta.env.VITE_API_URL}/product/${id}`, {
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => setProducts(response.result))
      .catch((error) => console.log("Error: " + error.message));
  }

  return {
    registerProduct,
    setName,
    name,
    setPrice,
    price,
    setOption,
    option,
    addOption,
    options,
    setCategory,
    setPictures,
    setDescription,
    productsFetch,
    productsView,
    setProductsView,
    products,
    productID,
    productsCategoryFetch,
    productsSearchFetch
  };
}
