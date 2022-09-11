import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../providers/useAuth";
import Home from "../pages/shop/Home";
import Login from "../pages/shop/Login";
import Cart from "../pages/shop/Cart";
import User from "../pages/shop/User";
import Details from "../pages/shop/Details";
import Dashboard from "../pages/Admin/Dashboard";

export default function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        {/* shop routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<Details />} />
        {/* user routes */}
        <Route path="/user" element={<User />} />
        {/* admin routes */}
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </AuthProvider>
  );
}
