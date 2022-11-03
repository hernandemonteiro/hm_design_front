import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchAPI } from "../hooks/helpers/fetchAPI";
import CryptoHelper from "../hooks/helpers/crypto";

export const GlobalStatesContext = createContext<any>("");

interface GlobalStatesProps {
  children: JSX.Element;
}

export const GlobalStatesProvider = (props: GlobalStatesProps) => {
  const [loginMessage, setLoginMessage] = useState("");
  const [user, setUser] = useState<any>(null);
  const [view, setView] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    if (recoveredUser) {
      const user = JSON.parse(CryptoHelper.cryptoDecrypt(recoveredUser) || "[]");
      setUser(user);
      setLoading(false);
    }
  }, []);

  function setLocalUser(user: string) {
    localStorage.setItem("user", user);
    window.location.reload();
  }

  function login(email: string, password: string) {
    fetchAPI(`/login/${email}/${password}`, "GET")
      .then((response) => {
        response.length > 1
          ? setLocalUser(response)
          : setLoginMessage("Email ou senha Inválidos");
      })
      .catch((error) => {
        setLoginMessage("Erro: contatar seu desenvolvedor");
        console.log("Login Error:" + error);
      });
  }

  function logout() {
    localStorage.removeItem("user");
    setUser(null);
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
