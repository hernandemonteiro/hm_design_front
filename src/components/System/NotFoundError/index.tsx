import React from "react";
import {} from "./NotFoundError.scss";
import notFound from "../../../assets/images/404.svg";
import ButtonLink from "../../UI/ButtonLink";

export default function NotFoundError() {
  return (
    <div className="errorNotFound">
      <div className="notFoundImgBox">
        <img src={notFound} className="img404" />
        <br />
        <h1>404: Not Found</h1>
        <ButtonLink to="/">Voltar ao Inicio</ButtonLink>
      </div>
    </div>
  );
}
