import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { AuthProvider, useAuth } from "../Hooks/useAuth";
import NotFoundError from "../components/System/NotFoundError";
import Home from "../pages/Shop/Home";
import CartPage from "../pages/Shop/Cart";
import Details from "../pages/Shop/Details";
import Login from "../components/System/Login";
import Register from "../components/System/Register";
import RecoveryPassword from "../components/System/RecoveryPassword";
import ForgotPassword from "../components/System/ForgotPassword";
import Loader from "../components/UI/Loader";
import Categorias from "../pages/Admin/Categorias";
import Producao from "../pages/Admin/Producao";
import Ordens from "../pages/Admin/Ordens";
import Clientes from "../pages/Admin/Clientes";
import Produtos from "../pages/Admin/Produtos";
import Dashboard from "../pages/Admin/Dashboard";
import User from "../pages/Shop/User";
import ProductRegister from "../pages/Admin/ProductRegister";
import useProducts from "../Hooks/useProducts";

export default function Router() {
  function RedirectLogged(props: any) {
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

  function PrivateUser(props: any) {
    const { authenticated, loading, user } = useAuth();

    loading ?? <Loader />;

    if (!authenticated || user.type != "1") {
      return <Navigate to="/login" />;
    }
    return props.children;
  }

  function PrivateAdmin(props: any) {
    const { authenticated, loading, user } = useAuth();
    const { getTokenGoogleAPI, deleteCloudImageCanceled } = useProducts();
    if (loading) {
      return <Loader />;
    } else if (!authenticated || user.type != "0") {
      return <Navigate to="/login" />;
    }

    // cloudStorage leak fix;
    const photos: any = localStorage.getItem("pic")
      ? localStorage.getItem("pic")
      : "[]";
    if (useParams().register != "true" && JSON.parse(photos).length > 0) {
      const token = getTokenGoogleAPI();
      JSON.parse(photos).map((element: any) => {
        deleteCloudImageCanceled(token, element.id);
      });
    }

    return props.children;
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* shop; */}
          <Route path="/" element={<Home />} />
          <Route path="/:search" element={<Home />} />
          <Route path="/category/:category" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/details/:id" element={<Details />} />
          {/* user; */}
          <Route
            path="/user"
            element={
              <PrivateUser>
                <User />
              </PrivateUser>
            }
          />
          {/* admin; */}
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
            path="/admin/produto/register/:register"
            element={
              <PrivateAdmin>
                <ProductRegister />
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
          {/* System; */}
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
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            path="/recoverypassword/:hash"
            element={<RecoveryPassword />}
          />
          <Route path="*" element={<NotFoundError />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
