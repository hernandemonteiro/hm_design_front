import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

export default function Login() {

    const [LoginView, setLoginView] = useState('Login');

    return (
        <div className="LoginBox">
            {LoginView == 'Login' &&
                <form>
                    <h1>HM Design</h1>
                    <label>Digite seu email!</label>
                    <input required type='email' />
                    <label>Digite sua senha!</label>
                    <input required type='password' />
                    <button type='submit'>Login</button>
                    <div className="containerButtons">
                        <button onClick={() => setLoginView('Register')}>Registrar</button>
                        <Link to='/'>
                            <button>Voltar ao site</button>
                        </Link>
                    </div>
                </form>
            }
            {LoginView == 'Register' &&
                < form >
                    <h1>Registre-se</h1>
                    <label>Digite seu nome!</label>
                    <input required type='text' />
                    <label>Digite seu email!</label>
                    <input required type='email' />
                    <label>Digite sua senha!</label>
                    <input required type='password' />
                    <label>Confirme sua senha!</label>
                    <input required type='password' />
                    <button onClick={() => setLoginView('Login')}>Já tem conta?</button>
                    <Link to='/'>
                        <button>Voltar ao site</button>
                    </Link>
                </form>
            }
        </div >
    )
}