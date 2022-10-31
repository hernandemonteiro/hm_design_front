import { FormEvent, useState } from "react";
import { errorCase, fetchAPI } from "./helpers/fetchAPI";

export default function usePassword() {
  const [email, setEmail] = useState("");
  const [view, setView] = useState<string | boolean>("");
  const [message, setMessage] = useState("");
  const [seconds, setSeconds] = useState(5);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hash, setHash] = useState<string | undefined>("");

  function forgotPassword(event: FormEvent) {
    event.preventDefault();
    fetchAPI(`/forgotPassword/${email}`, "POST")
      .then((response) => {
        if (response === "Email enviado!") {
          setView("Success");
        } else if (response === "Usuário não existe!") {
          setMessage("Usuário não encontrado em nosso sistema!");
        } else {
          console.log(response);
          setMessage("Erro em nosso servidor, tente novamente mais tarde!");
        }
      })
      .catch(async(error) => await errorCase(error));
  }

  function updatePassword(event: FormEvent) {
    event.preventDefault();
    fetchAPI(`/updatePassword/${hash}/${password}`, "PUT")
      .then((response) => {
        console.log(response);
        if (response === "Success") {
          return (window.location.href = "/login");
        } else {
          return setMessage("Erro ao mudar senha!");
        }
      })
      .catch(async(error) => await errorCase(error));
  }

  function confirmHash() {
    fetchAPI(`/confirmHash/${hash}`, "GET")
      .then((response) => {
        response === 0 && setView(false);
      })
      .catch(async(error) => await errorCase(error));
  }

  return {
    view,
    setSeconds,
    seconds,
    forgotPassword,
    message,
    setEmail,
    email,
    confirmHash,
    updatePassword,
    setPassword,
    password,
    setConfirmPassword,
    confirmPassword,
    setHash,
    hash,
  };
}
