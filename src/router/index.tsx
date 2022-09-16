import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../Hooks/useAuth";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import SystemRoutes from "./routes/SystemRoutes";
import ShopRoutes from "./routes/ShopRoutes";
import NotFoundError from "../components/System/NotFoundError";

export default function Router() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ShopRoutes />
        <UserRoutes />
        <AdminRoutes />
        <SystemRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}
