import React, { useState } from "react";
import CryptoJS from "crypto-js";

export default function useUserRegister() {
  const [View, setView] = useState("Login");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
  const [errorEmailMessage, setErrorEmailMessage] = useState("");

  const [sucessMessage, setSuccessMessage] = useState("");

  function userRegister(e: { preventDefault: () => void }) {
    let encryptedPassword = CryptoJS.SHA256(password).toString();

    e.preventDefault();
    let url = `${import.meta.env.VITE_API_URL}/users/${name}/${email}/${encryptedPassword}/1`;

    if (password === passwordConfirm) {
      fetch(url, { method: "PUT" })
        .then((response) => {
          // valida se a requisição falhou
          if (!response.ok) {
            // cairá no catch da promise
            console.log(new Error("falhou a requisição"));
          }

          // verificando pelo status
          if (response.status === 404) {
            console.log(new Error("não encontrou qualquer resultado"));
          }

          // retorna uma promise com os dados em JSON
          return response.json();
        })
        .then((response) => {
          console.log(response);
          if (response.result === "Usuário já cadastrado") {
            setErrorEmailMessage(response.result);
          } else {
            setSuccessMessage("Cadastrado com sucesso");
            setName("");
            setEmail("");
            setPassword("");
            setPasswordConfirm("");
            setView("Login");
          }
        })
        .catch((error) => console.log(error));
    } else {
      setErrorPasswordMessage("senhas não correspondem!");
    }
  }

  return {
    userRegister,
    setName,
    setEmail,
    setPassword,
    setPasswordConfirm,
    setView,
    email,
    password,
    View,
    errorPasswordMessage,
    errorEmailMessage,
    sucessMessage,
  };
}
