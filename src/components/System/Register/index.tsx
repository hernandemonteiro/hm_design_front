import useClient from "../../../Hooks/useClient";
import Button from "../../UI/Button";
import ButtonLink from "../../UI/ButtonLink";
import Form from "../../UI/Form";
import "./Register.scss";

export default function Register() {
  const {
    view,
    userRegister,
    message,
    setName,
    setEmail,
    setPassword,
    password,
    confirmPassword,
    setConfirmPassword,
  } = useClient();

  return (
    <div className="RegisterBox">
      {view === "Register" ? (
        <Form onSubmit={userRegister}>
          <h1>Cadastro</h1>
          {message}
          <label>Digite seu nome!</label>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            placeholder="Nome"
          />
          <label>Digite seu email!</label>
          <input
            required
            type="email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <label>Digite sua senha!</label>
          <input
            required
            type="password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
          <label>Confirme sua senha!</label>
          <input
            required
            autoComplete="off"
            className={
              password != confirmPassword ? "NotEqualPass" : "EqualPass"
            }
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            type="password"
            placeholder="Confirmar Senha"
          />
          {password === confirmPassword && password != "" ? (
            <Button type="submit" className="green" children="Cadastrar" />
          ) : (
            "Preencha todos os campos para cadastrar"
          )}
          <ButtonLink
            to="/login"
            className="warning"
            children="Já tem conta?"
          />
          <ButtonLink className="red" to="/" children="Voltar ao site" />
        </Form>
      ) : (
        <div className="sucessRegister">
          <h1>Registrado com sucesso!</h1>
          <br />
          <ButtonLink to="/login" className="green" children="Ir para login" />
        </div>
      )}
    </div>
  );
}
