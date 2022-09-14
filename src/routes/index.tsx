import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/shop/Home";
import Login from "../pages/shop/Login";
import Cart from "../pages/shop/Cart";
import User from "../pages/shop/User";
import Details from "../pages/shop/Details";
import Dashboard from "../pages/Admin/Dashboard";
import { AuthProvider, useAuth } from "../providers/useAuth";
import Register from "../components/Shop/Register";

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
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
