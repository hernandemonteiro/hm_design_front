import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
import Button from "../../UI/Button";
import ButtonLink from "../../UI/ButtonLink";
import Form from "../../UI/Form";
import "./Login.scss";

export default function Login() {
  const { login, loginMessage } = useAuth();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  function handleLogin(event: any) {
    event.preventDefault();
    login(email, password);
  }

  return (
    <div className="LoginBox">
      <Form onSubmit={handleLogin}>
        <h1>HM Design</h1>
        <h4 className="loginMessage">{loginMessage}</h4>
        <label>Digite seu email!</label>
        <input
          required={true}
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          type="email"
          autoFocus
        />
        <label>Digite sua senha!</label>
        <input
          required
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          type="password"
        />
        <Button className="green" children="Login" type="submit" />
        <ButtonLink className="warning" to="/register" children="cadastrar-se"/>
        <ButtonLink className="red" to="/" children="Voltar ao site" />
        <Link to="/forgotPassword">Esqueceu sua senha?</Link>
      </Form>
    </div>
  );
}
