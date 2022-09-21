import { useState } from "react";
import useToken from "./useToken";

export default function useOrders(){
    const [orders, setOrders] = useState([]);
    function orderFetch(){
        fetch(`${import.meta.env.VITE_API_URL}/orders`, {
          headers: {
            "x-access-token": useToken(),
          },
        })
          .then((response) => response.json())
          .then((response) => setOrders(response.result))
          .catch((error: string) => console.log("Orders Error Db:" + error));
      }

      return {
        orders,
        orderFetch
      }

}