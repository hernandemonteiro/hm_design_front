import { createContext, useContext, useState } from "react";

/* @description provide an global state ccontext for user login status;
 * @Hook [useState] used by change login status with "setUser";
 * @return an object with user login informations;
 * -----------------------------------------------
 */

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
