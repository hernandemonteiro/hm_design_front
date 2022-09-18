import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
import Button from "../../UI/Button";
import "./Login.scss";

export default function Login() {
  const { login, loginMessage } = useAuth();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  function handleSubmit(event: any) {
    event.preventDefault();
    login(email, password);
  }

  return (
    <div className="LoginBox">
      <form onSubmit={handleSubmit}>
        <h1>HM Design</h1>
        <h4 className="loginMessage">{loginMessage}</h4>
        <label>Digite seu email!</label>
        <input
          required
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
        <Button className='green' type="submit">Login</Button>
        <Link className="Link" to="/register">
          <Button className="warning">cadastrar-se</Button>
        </Link>
        <Link className="Link" to="/">
          <Button>Voltar ao site</Button>
        </Link>
        <Link to='/forgotPassword'>
          Esqueceu sua senha?
        </Link>
      </form>
    </div>
  );
}
