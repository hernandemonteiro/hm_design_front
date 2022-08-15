import React from "react";
import "./ProductCard.scss";

export default function ProductCard() {

    return (

        <div className="card">
            <div className="imageCard">
                <img src="https://www.datocms-assets.com/76860/1660532346-product_hm_design.pnghttps://www.datocms-assets.com/76860/1660532346-product_hm_design.png" />
            </div>
            <div className="productName">
                <h2>Product Name</h2>
            </div>
            <div className="productPrice">
                <h1>R$15.95</h1>
            </div>
            <div className="buttonsAction">
                <button>Detalhes</button>
            </div>
        </div>
    )
}