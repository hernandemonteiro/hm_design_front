import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/shop/Home";
import Cart from "../pages/shop/Cart";
import User from "../pages/shop/User";
import Details from "../pages/shop/Details";
import Dashboard from "../pages/Admin/Dashboard";
import { AuthProvider, useAuth } from "../providers/useAuth";
import Register from "../components/Shop/Register";
import Login from "../components/Shop/Login";
import Produtos from "../pages/Admin/Produtos";
import Clientes from "../pages/Admin/Clientes";
import Ordens from "../pages/Admin/Ordens";
import Categorias from "../pages/Admin/Categorias";
import Producao from "../pages/Admin/Producao";
import NotFoundError from "../components/NotFoundError";
import Loader from "../components/Loader";
export interface childrenProps {
  children: any;
}
export default function AppRoutes() {
  // private method to user routes;
  const Private = (props: childrenProps) => {
    const { authenticated, loading, user } = useAuth();

    loading ?? <Loader />;

    if (!authenticated || user.type != "1") {
      return <Navigate to="/login" />;
    }
    return props.children;
  };

  // redirect method case user is logged;
  function RedirectLogged(props: childrenProps) {
    const { authenticated, loading, user } = useAuth();

    loading ?? <Loader />;

    if (authenticated) {
      if (user.type === "1") {
        return <Navigate to="/user" />;
      } else if (user.type === "0") {
        return <Navigate to="/admin" />;
      }
    }
    return props.children;
  }

  // private method to admin routes;
  function PrivateAdmin(props: childrenProps) {
    const { authenticated, loading, user } = useAuth();
    loading ?? <Loader />;
    if (!authenticated || user.type != "0") {
      return <Navigate to="/login" />;
    }
    return props.children;
  }
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<Details />} />
          <Route
            path="/login"
            element={
              <RedirectLogged>
                <Login />
              </RedirectLogged>
            }
          />
          <Route
            path="/register"
            element={
              <RedirectLogged>
                <Register />
              </RedirectLogged>
            }
          />
          <Route
            path="/user"
            element={
              <Private>
                <User />
              </Private>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateAdmin>
                <Dashboard />
              </PrivateAdmin>
            }
          />
          <Route
            path="/admin/produtos"
            element={
              <PrivateAdmin>
                <Produtos />
              </PrivateAdmin>
            }
          />
          <Route
            path="/admin/clientes"
            element={
              <PrivateAdmin>
                <Clientes />
              </PrivateAdmin>
            }
          />
          <Route
            path="/admin/ordens"
            element={
              <PrivateAdmin>
                <Ordens />
              </PrivateAdmin>
            }
          />
          <Route
            path="/admin/categorias"
            element={
              <PrivateAdmin>
                <Categorias />
              </PrivateAdmin>
            }
          />
          <Route
            path="/admin/producao"
            element={
              <PrivateAdmin>
                <Producao />
              </PrivateAdmin>
            }
          />
          <Route
            path="*"
            element={
              <Private>
                <NotFoundError />
              </Private>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
