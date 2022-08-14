import React, { createContext, useContext, useState } from "react";

interface AuthProps {
    authContext: any,
    authProvider: any,
    children?: any
}
export const authContext = createContext({})

const initialStateAuth = {
    UserId: '',
    Email: '',
    isLoged: false
}

export const authProvider = (props: AuthProps) => {
    
    const [user, setUser] = useState(initialStateAuth);

    return (
        <authContext.Provider value={{ user, setUser }}>
            {props.children}
        </authContext.Provider>
    )
}

export const useAuth = () => useContext(authContext);