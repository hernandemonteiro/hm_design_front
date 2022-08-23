import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../providers/useAuth";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import User from "../pages/User";

export default function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </AuthProvider>
  );
}
