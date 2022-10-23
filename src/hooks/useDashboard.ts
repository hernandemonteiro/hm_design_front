import { useState } from "react";
import useToken from "./useToken";

export default function useDashboard() {
  const [users, setUsers] = useState([]);
  const [production, setProduction] = useState([]);
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const url = `${import.meta.env.VITE_API_URL}`;
  function fetchDashboard() {
    fetch(`${url}/users`, {
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => setUsers(response))
      .catch((error: string) => console.log("users error: " + error));

    fetch(`${url}/products`, {
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((error: string) => console.log("users error: " + error));

    fetch(`${url}/orders`, {
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => setProduction(response))
      .catch((error: string) => console.log("users error: " + error));

    fetch(`${url}/category`, {
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => setCategorys(response))
      .catch((error: string) => console.log("users error: " + error));
  }
  return {
    users,
    production,
    products,
    categorys,
    fetchDashboard,
  };
}
