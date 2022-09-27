import { createContext, useContext, useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import useToken from "./useToken";

/*
 * @description provide an global state context for user login status;
 */

export const GlobalStatesContext = createContext<any>("");

interface GlobalStatesProps {
  children: any;
}

export const GlobalStatesProvider = (props: GlobalStatesProps) => {
  const [loginMessage, setLoginMessage] = useState<string>("");
  const [user, setUser] = useState<any>(null);
  const [view, setView] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    if (recoveredUser) {
      var iv = CryptoJS.enc.Base64.parse(import.meta.env.VITE_HASH_SECRET);
      const secret = CryptoJS.SHA256(import.meta.env.VITE_HASH_SECRET);
      const user = CryptoJS.AES.decrypt(recoveredUser, secret, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }).toString(CryptoJS.enc.Utf8);
      const userJson = JSON.parse(user);
      setUser(userJson);
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
        // implementing jwt method;
        if (response.jwt != "") {
          localStorage.setItem("user", response.jwt);
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
    window.location.href = "/";
  }

  return (
    <GlobalStatesContext.Provider
      value={{
        authenticated: !!user,
        user,
        loading,
        loginMessage,
        login,
        logout,
        view,
        setView,
      }}
    >
      {props.children}
    </GlobalStatesContext.Provider>
  );
};

export const useGlobalStates = () => useContext(GlobalStatesContext);
