import { useState } from "react";
import Button from "../../UI/Button";
import "./ForgotPassword.scss";
import forgotSuccess from "../../../assets/images/forgotsuccess.svg";
import useToken from "../../../Hooks/useToken";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [view, setView] = useState("");
  const [message, setMessage] = useState("");
  const [seconds, setSeconds] = useState(4);

  function forgotPassword(event: any) {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_API_URL}/forgotPassword/${email}`, {
      method: "POST",
        headers: {
          "x-access-token": useToken(),
        }
    })
      .then((response) => response.json())
      .then((response) => {
       
        if (response.result === "Email enviado!") {
          setView("Success");
        } else if (response.result === "Usuário não existe!") {
          setMessage("Usuário não encontrado em nosso sistema!");
        } else {
          console.log(response);
          setMessage("Erro em nosso servidor, tente novamente mais tarde!");
        }
      })
      .catch((error) => {
        setMessage("Erro em nosso servidor, tente novamente mais tarde!");
        console.log(error)});
  }
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
        <form onSubmit={forgotPassword}>
          <p>Digite seu email abaixo e envie para recuperar sua senha!</p>
          <h3 className="MessageSystem">{message}</h3>
          <br />
          <input
            type="email"
            required
            autoFocus
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email registrado!"
          />
          <Button type={"submit"} className="green">
            RECUPERAR
          </Button>
          <Button
            type={"button"}
            onClick={() => (window.location.href = "/login")}
          >
            VOLTAR
          </Button>
        </form>
      ) : (
        <div className="forgotSuccess">
          <img src={forgotSuccess} />
          <br />
          <h1>Enviado com sucesso!</h1>
          <br />
          <p>Redirecionando em {seconds}s</p>
        </div>
      )}
    </div>
  );
}
