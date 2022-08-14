import React from "react";
import ProductCard from "../../components/ProductCard";
import Template from "../../components/Template";
// import { ProductController } from "../../controllers/ProductController";

/// Home is the first page rendered;
/// the page list products in sort order;

/// @route = "/"

export default function Home() {

    // const product = new ProductController();

    return (

        <Template>
            {/* <button onClick={() => product.registerProduct('Cartão', '1.99', 'description in development', 'imgs' )}></button> */}
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Template>
    )
}