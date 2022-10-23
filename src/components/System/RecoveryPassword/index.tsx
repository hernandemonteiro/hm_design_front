import React, { useEffect } from "react";
import Button from "../../UI/Button";
import {} from "./RecoveryPassword.scss";
import forgotFailure from "../../../assets/images/forgotsuccess.svg";
import { useParams } from "react-router-dom";
import Form from "../../UI/Form";
import usePassword from "../../../hooks/usePassword";

export default function RecoveryPassword() {
  const {
    confirmHash,
    view,
    updatePassword,
    message,
    setPassword,
    password,
    setConfirmPassword,
    confirmPassword,
    setHash,
  } = usePassword();

  const hashUrl = useParams().hash;
  useEffect(() => {
    setHash(hashUrl);
    confirmHash;
  }, []);

  return (
    <div className="RecoveryBox">
      {view ? (
        <Form onSubmit={updatePassword}>
          <p>Recuperação de senha!</p>
          <h3 className="MessageSystem">{message}</h3>
          <br />
          <input
            type="password"
            required
            autoFocus
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Nova Senha"
          />
          <input
            type="password"
            required
            className={password != confirmPassword ? "outlineRed" : ""}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="Confirmar Nova Senha"
          />
          {password != "" &&
          password === confirmPassword &&
          confirmPassword != "" ? (
            <Button type={"submit"} className="green">
              RECUPERAR
            </Button>
          ) : (
            "Senha e confirmação devem ser iguais!"
          )}

          <Button
            type={"button"}
            onClick={() => (window.location.href = "/login")}
          >
            IR AO LOGIN
          </Button>
        </Form>
      ) : (
        <div className="forgotFailure">
          <img src={forgotFailure} />
          <br />
          <h1>Não foi encontrada solicitação para esse email!</h1>
          <br />
          <Button onClick={() => (window.location.href = "/forgotpassword")}>
            Tentar Novamente!
          </Button>
        </div>
      )}
    </div>
  );
}
