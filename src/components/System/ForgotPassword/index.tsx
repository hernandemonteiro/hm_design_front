import { useState } from "react";
import Button from "../../UI/Button";
import "./ForgotPassword.scss";
import forgotSuccess from "../../../assets/images/forgotsuccess.svg";
import useToken from "../../../Hooks/useToken";
import Form from "../../UI/Form";
import usePassword from "../../../Hooks/usePassword";

export default function ForgotPassword() {
  const {
    view,
    setSeconds,
    seconds,
    forgotPassword,
    message,
    setEmail,
    email,
  } = usePassword();

  if (view === "Success") {
    setInterval(async function () {
      setSeconds(seconds - 1);
      if (seconds === 1) {
        window.location.href = "/";
      }
    }, 1000);
  }
  return (
    <div className="ForgotPasswordBox">
      {view != "Success" ? (
        <Form onSubmit={forgotPassword}>
          <p>Digite seu email abaixo e envie para recuperar sua senha!</p>
          <h3 className="MessageSystem">{message}</h3>
          <br />
          <input
            type="email"
            required
            autoFocus
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            placeholder="Email registrado!"
          />
          <Button type={"submit"} className="green" children="RECUPERAR" />
          <Button
            type={"button"}
            onClick={() => (window.location.href = "/login")}
            children="VOLTAR"
          />
        </Form>
      ) : (
        <div className="forgotSuccess">
          <img src={forgotSuccess} />
          <br />
          <h1>Dentro de alguns minutos você receberá nosso email!</h1>
          <br />
          <p>Redirecionando em {seconds}s</p>
        </div>
      )}
    </div>
  );
}
