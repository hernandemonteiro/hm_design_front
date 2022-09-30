import { useState } from "react";
import useToken from "./useToken";

export default function useClient() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [view, setView] = useState<string>("Register");
  const [users, setUsers] = useState([]);
  function usersFetch() {
    fetch(`${import.meta.env.VITE_API_URL}/users`, {
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => setUsers(response.result))
      .catch((error: string) => console.log("Users Error Db:" + error));
  }
  function deleteUser(id: string) {
    fetch(`${import.meta.env.VITE_API_URL}/users/${id}`, {
      method: "DELETE",
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => {
        console.log(response.status);
        usersFetch();
      })
      .catch((error: string) => console.log("Users Error delete:" + error));
  }

  const userRegister = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const url = `${
      import.meta.env.VITE_API_URL
    }/users/${name}/${email}/${password}/1`;

    fetch(url, {
      method: "POST",
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.result != "user registered") {
          setView("Success");
        } else if (response.result === "user registered") {
          setMessage("Email já registrado!");
        } else {
          setMessage("Erro ao registrar!");
        }
      })
      .catch((error) => console.log(error));
  };

  return {
    users,
    usersFetch,
    deleteUser,
    view,
    userRegister,
    message,
    setName,
    setEmail,
    setPassword,
    password,
    confirmPassword,
    setConfirmPassword,
  };
}
