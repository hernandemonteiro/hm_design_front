import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import Cart from "../pages/Cart";


export default function AppRoutes() {
    return (
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/admin" element={<Admin/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/cart" element={<Cart/>} />
            </Routes>
    )
}