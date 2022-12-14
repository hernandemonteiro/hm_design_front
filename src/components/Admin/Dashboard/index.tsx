import CardDashboard from "../../UI/CardDashboard";
import React, { useEffect } from "react";
import {} from "./Dashboard.scss";
import useDashboard from "../../../hooks/useDashboard";

export default function Dashboard() {
  const { users, production, products, categorys, fetchDashboard } =
    useDashboard();
  useEffect(fetchDashboard, []);
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
