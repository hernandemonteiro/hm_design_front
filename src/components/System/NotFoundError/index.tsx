import React from "react";
import "./NotFoundError.scss";
import notFound from "../../../assets/images/404.svg";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";

export default function NotFoundError() {
  return (
    <div className="errorNotFound">
      <div className="notFoundImgBox">
        <img src={notFound} className='img404' />
        <br />
        <h1>404: Not Found</h1>
        <Link to="/">
          <Button>Voltar ao Inicio</Button>
        </Link>
      </div>
    </div>
  );
}
