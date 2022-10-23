import React, { useEffect, useState } from "react";
import Template from "../../../components/Shop/Template";
import useProducts from "../../../hooks/useProducts";
import { useParams } from "react-router-dom";
import TitleHome from "../../../components/UI/TitleHome";
import ProductList from "../../../components/Shop/ProductList";
import Loader from "../../../components/UI/Loader";

export default function Home() {
  const category = useParams().category;
  const search = useParams().search;
  const [message, setMessage] = useState(<></>);
  const [loading, setLoader] = useState(true);
  const {
    products,
    productsFetch,
    productsCategoryFetch,
    productsSearchFetch,
  } = useProducts();

  useEffect(() => {
    category && productsCategoryFetch(category);
    search && productsSearchFetch(search);
    category == undefined && search == undefined && productsFetch();
    setTimeout(() => {
      setLoader(false);
      setMessage(<h1 className="NotFoundHere">Nada encontrado por aqui!</h1>);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Template>
          {category ? <TitleHome title={category} /> : ""}

          <ProductList products={products} message={message} />
        </Template>
      )}
    </>
  );
}
