import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../providers/useAuth";
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
        <button type="submit">Login</button>
        <Link className="Link" to="/register">
          <button>cadastrar-se</button>
        </Link>
        <Link className="Link" to="/">
          <button>Voltar ao site</button>
        </Link>
      </form>
    </div>
  );
}
