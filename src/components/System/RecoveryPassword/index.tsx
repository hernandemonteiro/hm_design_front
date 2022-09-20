import React, { useEffect, useState } from "react";
import Button from "../../UI/Button";
import "./RecoveryPassword.scss";
import forgotFailure from "../../../assets/images/forgotsuccess.svg";
import { useParams } from "react-router-dom";
import useToken from "../../../Hooks/useToken";

export default function RecoveryPassword() {
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [view, setView] = useState(true);
  const hash = useParams().hash;
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/confirmHash/${hash}`, {
      headers: {
        "x-access-token": useToken(),
      },
    })
      .then((response: any) => response.json())
      .then((response: any) => {
        if (response.result === 0) {
          setView(false);
        }
      });
  }, []);
  function recoveryPassword(event: any) {
    event.preventDefault();
    fetch(
      `${import.meta.env.VITE_API_URL}/updatePassword/${hash}/${password}`,
      {
        headers: {
          "x-access-token": useToken(),
        },
      }
    )
      .then((response: any) => {
        console.log(response)
        if (response.result === "Success") {
          window.location.href = "/login";
        }
        setMessage("Erro ao mudar senha!");
      })
      .catch((error: any) => {
        setMessage("Erro ao mudar senha!");
        console.log(error);
      });
  }
  return (
    <div className="RecoveryBox">
      {view ? (
        <form onSubmit={recoveryPassword}>
          <p>Digite sua nova senha!</p>
          <h3 className="MessageSystem">{message}</h3>
          <br />
          <input
            type="password"
            required
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
        </form>
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
