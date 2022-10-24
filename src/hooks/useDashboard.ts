import { useState } from "react";
import { fetchAPI } from "./helpers/fetchAPI";

export default function useDashboard() {
  const [users, setUsers] = useState([]);
  const [production, setProduction] = useState([]);
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  function fetchDashboard() {
    fetchAPI("/users", "GET")
      .then((response) => setUsers(response))
      .catch((error: string) => console.log("users error: " + error));

    fetchAPI("/products", "GET")
      .then((response) => setProducts(response))
      .catch((error: string) => console.log("users error: " + error));

    fetchAPI("/orders", "GET")
      .then((response) => setProduction(response))
      .catch((error: string) => console.log("users error: " + error));

    fetchAPI("/category", "GET")
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
