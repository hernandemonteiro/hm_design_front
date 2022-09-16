import { Navigate, Route } from "react-router-dom";
import Loader from "../../components/UI/Loader";
import { useAuth } from "../../Hooks/useAuth";
import User from "../../pages/Shop/User";

export default function UserRoutes() {
  const Private = (props: any) => {
    const { authenticated, loading, user } = useAuth();

    loading ?? <Loader />;

    if (!authenticated || user.type != "1") {
      return <Navigate to="/login" />;
    }
    return props.children;
  };
  return (
    <Route
      path="/user"
      element={
        <Private>
          <User />
        </Private>
      }
    />
  );
}
