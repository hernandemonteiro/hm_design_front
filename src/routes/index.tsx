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

export interface privateProps {
  children: any;
}
export interface redirectProps {
  children: any;
}
export default function AppRoutes() {
  const Private = (props: privateProps) => {
    const { authenticated, loading } = useAuth();

    if (loading) {
      return <div>Carregando</div>;
    }
    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return props.children;
  };

  function RedirectLogged(props: redirectProps) {
    const { authenticated, user, loading } = useAuth();
    if (loading) {
      return <div>Carregando</div>;
    }
    if (authenticated) {
      if (user.type === "1") {
        return <Navigate to="/user" />;
      } else if (user.type === "0") {
        return <Navigate to="/admin" />;
      }
    }
    return props.children;
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
           {/* error routes */}
           <Route
            path="*"
            element={
              <Private>
                <NotFoundError />
              </Private>
            }
          />
          {/* shop routes */}
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
          {/* user routes */}
          <Route
            path="/user"
            element={
              <Private>
                <User />
              </Private>
            }
          />
          {/* admin routes */}
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
      </BrowserRouter>
    </AuthProvider>
  );
}
