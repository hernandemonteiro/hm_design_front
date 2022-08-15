import ProductCard from "../../components/ProductCard";
import Template from "../../components/Template";
import StartUp from "../../dist/StartUp";


/// Home is the first page rendered;
/// the page list products in sort order;

/// @route = "/"

export default function Home() {

    let port = 5000;
    // StartUp.app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));

    return (
        <Template>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Template>
    )
}