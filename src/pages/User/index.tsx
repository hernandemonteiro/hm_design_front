import React from "react";
import { useAuth } from "../../providers/useAuth";

export default function User(){

    const { user, setUser } = useAuth();
    if(user.isLogged == false){
        window.location.href='/login'
    }
    return (<h1>Perfil</h1>)
}