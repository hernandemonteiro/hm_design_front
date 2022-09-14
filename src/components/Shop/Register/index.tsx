import { Link } from "react-router-dom";
import useUserRegister from "../../../Hooks/useUserRegister";
import { useAuth } from "../../../providers/useAuth";
import "./Register.scss";

export default function Register() {
  const {
    userRegister,
    setName,
    setEmail,
    setPassword,
    setPasswordConfirm,
    errorPasswordMessage,
    password, 
    
    errorEmailMessage,
  } = useUserRegister();

  const { login } = useAuth();

  return (
    <div className="RegisterBox">
      <form onSubmit={userRegister}>
        <h1>Cadastro</h1>
        <label>Digite seu nome!</label>
        <input
          required
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
        <label>Digite seu email!</label>
        {errorEmailMessage}
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <label>Digite sua senha!</label>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <label>Confirme sua senha!</label>
        <p>{errorPasswordMessage}</p>
        <input
          required
          onChange={(e) => setPasswordConfirm(e.target.value)}
          type="password"
          placeholder="Confirmar Senha"
        />

        <button className="btnWidth" type="submit">
          Cadastrar
        </button>
        <Link to="/login">
          <button className="btnWidth">Já tem conta?</button>
        </Link>
        <Link to="/">
          <button className="btnWidth">Voltar ao site</button>
        </Link>
      </form>
    </div>
  );
}
