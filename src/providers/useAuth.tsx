import { LocalConvenienceStoreOutlined } from "@mui/icons-material";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* @description provide an global state context for user login status;
 */

export const AuthContext = createContext<any>("");

interface authProps {
  children: any;
}

export const AuthProvider = (props: authProps) => {
  const [user, setUser] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  function login(email: string, password: string) {
    fetch(`${import.meta.env.VITE_API_URL}/login/${email}/${password}`)
      .then((response) => response.json())
      .then((response) => {
        // implementing jwt method;
        if (response.result._id) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              id: response.result._id,
              type: response.result.type,
            })
          );
          if (response.result.type === "0") {
            window.location.href = "/admin";
          } else {
            window.location.href = "/user";
          }
        }
      })
      .catch((error) => console.log("email ou senha incorretos!"));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
