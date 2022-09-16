import { BrowserRouter, Routes } from "react-router-dom";
import { AuthProvider } from "../Hooks/useAuth";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import SystemRoutes from "./routes/SystemRoutes";
import ShopRoutes from "./routes/ShopRoutes";

export default function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <ShopRoutes />
          <SystemRoutes />
          <UserRoutes />
          <AdminRoutes />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
