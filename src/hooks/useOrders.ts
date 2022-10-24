import { useState } from "react";
import { errorCase, fetchAPI } from "./helpers/fetchAPI";

export default function useOrders() {
  const [orders, setOrders] = useState([]);
  function orderFetch() {
    fetchAPI("/orders", "GET")
      .then((response) => setOrders(response))
      .catch((error) => errorCase(error));
  }

  return {
    orders,
    orderFetch,
  };
}
