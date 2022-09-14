import React, { useState } from "react";

export default function useUserRegister() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
  const [errorEmailMessage, setErrorEmailMessage] = useState("");

  const [sucessMessage, setSuccessMessage] = useState("");

  function userRegister(e: { preventDefault: () => void }) {

    e.preventDefault();
    let url = `${import.meta.env.VITE_API_URL}/users/${name}/${email}/${password}/1`;

    if (password === passwordConfirm) {
      fetch(url, { method: "PUT" })
        .then((response) => {
          if (!response.ok) {
            console.log(new Error("falhou a requisição"));
          }
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
    email,
    password,
    errorPasswordMessage,
    errorEmailMessage,
    sucessMessage,
  };
}
