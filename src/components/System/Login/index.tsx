import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalStates } from "../../../providers/useGlobalStates";
import Button from "../../UI/Button";
import ButtonLink from "../../UI/ButtonLink";
import Form from "../../UI/Form";
import {} from "./Login.scss";

export default function Login() {
  const { login, loginMessage } = useGlobalStates();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  function handleLogin(event: FormEvent) {
    event.preventDefault();
    login(email, password);
  }

  return (
    <div className="LoginBox">
      <Form onSubmit={handleLogin}>
        <h1>HM Design</h1>
        <h4 className="ErrorMessage">{loginMessage}</h4>
        <label>Digite seu email!</label>
        <input
          required={true}
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          type="email"
        />
        <label>Digite sua senha!</label>
        <input
          required
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          type="password"
        />
        <Button className="green" type="submit">
          Login
        </Button>
        <ButtonLink className="warning" to="/register">
          cadastrar-se
        </ButtonLink>
        <ButtonLink className="red" to="/">
          Voltar ao site
        </ButtonLink>
        <Link to="/forgotPassword">Esqueceu sua senha?</Link>
      </Form>
    </div>
  );
}
