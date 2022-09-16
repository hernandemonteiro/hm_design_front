import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "../../components/UI/Loader";
import { useAuth } from "../../Hooks/useAuth";
import Categorias from "../../pages/Admin/Categorias";
import Clientes from "../../pages/Admin/Clientes";
import Dashboard from "../../pages/Admin/Dashboard";
import Ordens from "../../pages/Admin/Ordens";
import Producao from "../../pages/Admin/Producao";
import Produtos from "../../pages/Admin/Produtos";

export default function AdminRoutes() {
  function Private(props: any) {
    const { authenticated, loading, user } = useAuth();
    loading ?? <Loader />;
    if (!authenticated || user.type != "0") {
      return <Navigate to="/login" />;
    }
    return props.children;
  }
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          <Private>
            <Dashboard />
          </Private>
        }
      />
      <Route
        path="/admin/produtos"
        element={
          <Private>
            <Produtos />
          </Private>
        }
      />
      <Route
        path="/admin/clientes"
        element={
          <Private>
            <Clientes />
          </Private>
        }
      />
      <Route
        path="/admin/ordens"
        element={
          <Private>
            <Ordens />
          </Private>
        }
      />
      <Route
        path="/admin/categorias"
        element={
          <Private>
            <Categorias />
          </Private>
        }
      />
      <Route
        path="/admin/producao"
        element={
          <Private>
            <Producao />
          </Private>
        }
      />
    </Routes>
  );
}
