import React, { createContext, useContext, useState } from "react";

interface AuthProps {
  children?: any;
}

export const AuthContext = createContext<any>({});

export const AuthProvider = (props: AuthProps) => {
  const initialState = {
    UserId: "",
    Name: "",
    Type: "",
    isLogged: false,
  };

  const [user, setUser] = useState<any>(initialState);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
