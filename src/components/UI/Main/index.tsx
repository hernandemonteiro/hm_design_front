import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import ScrollToTop from "../ScrollToTop";
import {} from "./Main.scss";

interface MainProps {
  children?: JSX.Element;
}

export default function Main(props: MainProps) {
  const [loading, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <>
          {props.children}
          <ScrollToTop />
        </>
      )}
    </main>
  );
}
