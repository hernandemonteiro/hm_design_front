import { useState } from "react";
import { fetchAPI } from "./helpers/fetchAPI";

export default function useClient() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [view, setView] = useState<string>("Register");
  const [users, setUsers] = useState([]);

  function usersFetch() {
    fetchAPI("/users", "GET")
      .then((response) => setUsers(response))
      .catch((error: string) => console.log("Users Error Db:" + error));
  }

  function deleteUser(id: string) {
    fetchAPI(`/users/${id}`, "DELETE")
      .then(() => usersFetch())
      .catch((error: string) => console.log("Users Error delete:" + error));
  }

  const userRegister = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    fetchAPI(`/users/${name}/${email}/${password}/1`, "POST")
      .then((response) => {
        response != "user registered"
          ? setView("Success")
          : response === "user registered"
          ? setMessage("Email já registrado!")
          : setMessage("Erro ao registrar!");
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
