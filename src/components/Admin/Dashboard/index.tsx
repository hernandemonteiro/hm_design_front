import CardDashboard from "../../UI/CardDashboard";
import { useEffect, useState } from "react";
import "./Dashboard.scss";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [production, setProduction] = useState([]);
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const url = `${import.meta.env.VITE_API_URL}/${import.meta.env.VITE_HASH_SECRET}`;
  useEffect(() => {
    fetch(`${url}/users`)
      .then((response) => response.json())
      .then((response) => setUsers(response.result))
      .catch((error: string) => console.log("users error: " + error));

    fetch(`${url}/products`)
      .then((response) => response.json())
      .then((response) => setProducts(response.result))
      .catch((error: string) => console.log("users error: " + error));

    fetch(`${url}/orders`)
      .then((response) => response.json())
      .then((response) => setProduction(response.result))
      .catch((error: string) => console.log("users error: " + error));

    fetch(`${url}/category`)
      .then((response) => response.json())
      .then((response) => setCategorys(response.result))
      .catch((error: string) => console.log("users error: " + error));
  }, []);
  return (
    <div>
      <div className="Dashboard">
        <CardDashboard title="Usuários" quantity={users.length} />
        <CardDashboard title="Produção" quantity={production.length} />
        <CardDashboard title="Produtos" quantity={products.length} />
        <CardDashboard title="Categorias" quantity={categorys.length} />
      </div>
      {/* implement graphs with store data */}
    </div>
  );
}
