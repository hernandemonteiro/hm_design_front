import { createContext, useContext, useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import useToken from "./useToken";

/*
 * @description provide an global state context for user login status;
 */

export const AuthContext = createContext<any>("");

interface authProps {
  children: any;
}

export const AuthProvider = (props: authProps) => {
  const [loginMessage, setLoginMessage] = useState<string>("");
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
    fetch(`${import.meta.env.VITE_API_URL}/login/${email}/${password}`, {
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        const token = response.jwt;
        var iv = CryptoJS.enc.Base64.parse(import.meta.env.VITE_HASH_SECRET);
        const secret = CryptoJS.SHA256(import.meta.env.VITE_HASH_SECRET);
        const user = CryptoJS.AES.decrypt(token, secret, {
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7,
        }).toString(CryptoJS.enc.Utf8);
        const userJson = JSON.parse(user);
        // implementing jwt method;
        if (userJson.id != "") {
          localStorage.setItem(
            "user",
            JSON.stringify({
              id: userJson.id,
              type: userJson.type,
            })
          );
          window.location.reload();
        }
      })
      .catch((error) => {
        setLoginMessage("Email ou senha Inválidos");
        console.log("Login Error:" + error);
      });
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        loading,
        loginMessage,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
