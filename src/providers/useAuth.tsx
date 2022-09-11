import { createContext, useContext, useState } from "react";

/* @description provide an global state for user login status;
 * @param {function} setUser, used by change login status;
 * @return an object with user login informations;
 * -----------------------------------------------
 */

// interface types to TS;
interface AuthProps {
  children?: any;
}

// create the global context;
export const AuthContext = createContext<any>({});

// create the global context provider;
export const AuthProvider = (props: AuthProps) => {
  // define an initial State for the user login;
  const initialState = {
    UserId: "",
    Name: "",
    Type: "",
    isLogged: false,
  };
  // useState hook to change the user login status;
  const [user, setUser] = useState<any>(initialState);

  // send the infos to a global context;
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

// export the global context in hook format;
export const useAuth = () => useContext(AuthContext);
