import React, { createContext, useContext, useState } from "react";

interface AuthProps {
  children?: any;
}
const initialState = {
  UserId: "",
  Name: "",
  Type: "",
  isLogged: false,
};
export const AuthContext = createContext<any>(initialState);

export const AuthProvider = (props: AuthProps) => {
  

  const [user, setUser] = useState<any>(initialState);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
