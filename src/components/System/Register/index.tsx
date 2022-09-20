import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
import Button from "../../UI/Button";
import "./Register.scss";
import CryptoJS from "crypto-js";

export default function Register() {
  const { login } = useAuth();

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [view, setView] = useState<string>("Register");

  const userRegister = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    let url = `${
      import.meta.env.VITE_API_URL
    }/users/${name}/${email}/${password}/1`;
    const hash = import.meta.env.VITE_HASH_SECRET;
    var iv = CryptoJS.enc.Base64.parse(import.meta.env.VITE_HASH_SECRET);
    const secret = CryptoJS.SHA256(import.meta.env.VITE_HASH_SECRET);
    const token = CryptoJS.AES.encrypt(hash, secret, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();
    const body = JSON.stringify({
      authorization: token,
    });
    fetch(url, { method: "PUT", body: body })
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

  return (
    <div className="RegisterBox">
      {view === "Register" && (
        <form onSubmit={userRegister}>
          <h1>Cadastro</h1>
          {message}
          <label>Digite seu nome!</label>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
          />
          <label>Digite seu email!</label>
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
          <input
            required
            className={
              password != confirmPassword ? "NotEqualPass" : "EqualPass"
            }
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            type="password"
            placeholder="Confirmar Senha"
          />
          {password === confirmPassword ? (
            <Button className="green btnWidth" type="submit">
              Cadastrar
            </Button>
          ) : (
            <Button disabled className="btnWidth" type="submit">
              Cadastrar
            </Button>
          )}
          <Link className="Link" to="/login">
            <Button className="warning">Já tem conta?</Button>
          </Link>
          <Link className="Link" to="/">
            <Button>Voltar ao site</Button>
          </Link>
        </form>
      )}
      {view === "Success" && (
        <div>
          <h1>Registrado com sucesso!</h1>
          <br />
          <Link className="Link" to="/login">
            <button className="btnWidth">Ir para login</button>
          </Link>
        </div>
      )}
    </div>
  );
}
