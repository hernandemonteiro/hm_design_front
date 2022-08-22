import { Link } from "react-router-dom";
import useLogin from "../../Hooks/useLogin";
import useUserRegister from "../../Hooks/useUserRegister";
import "./Login.scss";



export default function Login() {

    const {
        userRegister,
        setName,
        setEmail,
        setPassword,
        setPasswordConfirm,
        setView,
        email,
        password,
        View,
        errorPasswordMessage,
        errorEmailMessage,
        sucessMessage } = useUserRegister();

        const {
            userLogin
        } = useLogin(email, password);

    

    return (

        <div className="LoginBox">
            {View == 'Login' &&
                <form onSubmit={userLogin}>
                    <h1>HM Design</h1>
                    <h5>{sucessMessage}</h5>
                    <label>Digite seu email!</label>
                    <input required
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                        type='email' />
                    <label>Digite sua senha!</label>
                    <input required
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                        type='password' />
                    <button type='submit'>Login</button>
                    <button onClick={() => setView('Register')}>cadastrar-se</button>
                    <Link to='/'>
                        <button>Voltar ao site</button>
                    </Link>
                </form>
            }
            {View == 'Register' &&
                <form onSubmit={userRegister}>
                    <h1>Cadastro</h1>
                    <label>Digite seu nome!</label>
                    <input required
                        type='text'
                        onChange={e => setName(e.target.value)}
                        placeholder='Nome' />
                    <label>Digite seu email!</label>
                    {errorEmailMessage}
                    <input required
                        type='email'
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Email' />
                    <label>Digite sua senha!</label>
                    <input required
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                        placeholder='Senha' />
                    <label>Confirme sua senha!</label>
                    <p>{errorPasswordMessage}</p>
                    <input required
                        onChange={e => setPasswordConfirm(e.target.value)}
                        type='password'
                        placeholder='Confirmar Senha' />

                    <button className="btnWidth" type='submit'>Cadastrar</button>
                    <button onClick={() => setView('Login')} className="btnWidth">Já tem conta?</button>
                    <Link to='/'>
                        <button className="btnWidth">Voltar ao site</button>
                    </Link>
                </form>
            }
        </div >
    )
}