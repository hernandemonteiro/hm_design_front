import Template from "../../../components/Admin/Template";
import ProductList from "../../../components/Shop/ProductList";
import ButtonLink from "../../../components/UI/ButtonLink";

export default function Produtos() {

  return (
    <Template>
      <ButtonLink to="/admin/produto/register/true" children="Cadastrar Produto" />
      <ProductList />
    </Template>
  );
}
