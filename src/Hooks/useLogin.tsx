import React from "react";
import CryptoJS from "crypto-js";
import { useAuth } from "../providers/useAuth";

export default function useLogin(email: string, password: string) {

    const { user, setUser } = useAuth();

    function userLogin(event: { preventDefault: () => void; }) {

        event.preventDefault();

        let encryptedPassword = CryptoJS.SHA256(password).toString();

        fetch(`${process.env.API_URL}/users`)
            .then(response => response.json())
            .then(response => response.result)
            .then(response => response.filter((element: {
                email: any,
                password: any
            }) => element.email == email && element.password == encryptedPassword))
            .then(response => {

                // encontrar usuário setar id, nome, type e ir para perfil

                if (response.length > 0 && response[0].type == 0) {

                    let userLoged = {
                        UserId: `${response[0]._id}`,
                        Name: `${response[0].name}`,
                        Type: `${response[0].type}`,
                        isLoged: true
                    };
                    setUser(userLoged);
                    // vai para admin
                    window.location.href = '/admin';

                } else if (response.length > 0 && response[0].type == 1) {

                    let userLoged = {
                        UserId: response[0]._id,
                        Name: `${response[0].name}`,
                        Type: `${response[0].type}`,
                        isLoged: true
                    };
                    setUser(userLoged);
                    // vai para perfil comum
                    window.location.href = '/user';
                } else {
                    // caso não mensagem de erro
                }
            })
            .catch(error => console.log(error));
    }

    return {
        userLogin,

    }

}