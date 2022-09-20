import ProductDetail from "../../../components/Shop/ProductDetail";
import Template from "../../../components/Shop/Template";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useToken from "../../../Hooks/useToken";

export default function Details() {
  const [data, setData] = useState<any>([]);
  const route = useParams();
  const id = route.id;
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/product/${id}`, {
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => setData(response.result))
      .catch((error) => console.log("Error: " + error.message));
  }, []);
  return (
    <Template>
      <ProductDetail
        description={data.description}
        name={data.name}
        price={data.price}
        id={data._id}
      />
    </Template>
  );
}
