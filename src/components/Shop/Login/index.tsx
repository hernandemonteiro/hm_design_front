import { WidthNormalSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useUserRegister from "../../../Hooks/useUserRegister";
import { useAuth } from "../../../providers/useAuth";
import "./Login.scss";

export default function Login() {
  const { setEmail, setPassword, email, password, sucessMessage } =
    useUserRegister();

  const { login } = useAuth();

  function handleSubmit(event: any) {
    event.preventDefault();
    login(email, password);
  }

  return (
    <div className="LoginBox">
      <form onSubmit={handleSubmit}>
        <h1>HM Design</h1>
        <h5>{sucessMessage}</h5>
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
        <Link className='Link' to="/register">
          <button>cadastrar-se</button>
        </Link>
        <Link className='Link' to="/">
          <button>Voltar ao site</button>
        </Link>
      </form>
    </div>
  );
}
