import { useState } from "react";
import { errorCase, fetchAPI } from "./helpers/fetchAPI";

export default function useDashboard() {
  const [users, setUsers] = useState([]);
  const [production, setProduction] = useState([]);
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  function fetchDashboard() {
    fetchAPI("/users", "GET")
      .then((response) => setUsers(response))
      .catch(async(error) => await errorCase(error));

    fetchAPI("/products", "GET")
      .then((response) => setProducts(response))
      .catch(async(error) => await errorCase(error));

    fetchAPI("/orders", "GET")
      .then((response) => setProduction(response))
      .catch(async(error) => await errorCase(error));

    fetchAPI("/categorys", "GET")
      .then((response) => setCategorys(response))
      .catch(async(error) => await errorCase(error));
  }
  return {
    users,
    production,
    products,
    categorys,
    fetchDashboard,
  };
}
