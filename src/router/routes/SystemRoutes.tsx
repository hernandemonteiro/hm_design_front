import { Navigate, Route } from "react-router-dom";
import ForgotPassword from "../../components/System/ForgotPassword";
import Login from "../../components/System/Login";
import NotFoundError from "../../components/System/NotFoundError";
import RecoveryPassword from "../../components/System/RecoveryPassword";
import Register from "../../components/System/Register";
import Loader from "../../components/UI/Loader";
import { useAuth } from "../../Hooks/useAuth";

export default function SystemRoutes() {
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
  return (
    <>
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
        path="/recoverypassword/:email/:hash"
        element={<RecoveryPassword />}
      />
      <Route path="*" element={<NotFoundError />} />
    </>
  );
}
