import Template from "../../../components/Shop/Template";
import { useParams } from "react-router-dom";
import TitleHome from "../../../components/UI/TitleHome";
import ProductList from "../../../components/Shop/ProductList";

/* @description the first page rendered, list products in sort order
 *  @route = "/"
 */
export default function Home() {
  const category = useParams().category;

  return (
    <Template>
      {category ? <TitleHome title={category} /> : ""}
      <ProductList />
    </Template>
  );
}
