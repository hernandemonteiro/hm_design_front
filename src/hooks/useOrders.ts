import { useState } from "react";
import { fetchAPI } from "./helpers/fetchAPI";

export default function useOrders() {
  const [orders, setOrders] = useState([]);
  function orderFetch() {
    fetchAPI("/orders", "GET")
      .then((response) => setOrders(response))
      .catch((error: string) => console.log("Orders Error Db:" + error));
  }

  return {
    orders,
    orderFetch,
  };
}
