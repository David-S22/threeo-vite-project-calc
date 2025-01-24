import { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaUser, FaLock} from 'react-icons/fa';
import "./LoginPage.css";

/*
const [username, setUsername] = useState();
const [password, setPassword] = useState();

const handleSubmit = () => {
  console.log("Envio");
}
*/

const LoginPage = () => {
  return (
    <div id='Login'>
      <form>
        <h1>Login</h1>
        <div>
          <input type="email" placeholder='E-mail'></input>
          <FaUser className="Icon"/>
        </div>
        <div>
          <input type='password' placeholder='Senha'></input>
          <FaLock className="Icon"/>
        </div>
        <div>
          <div>
            <input type="checkbox" ></input>
            Lembre de mim
          </div>
          <a href="#">Esqueceu a senha?</a>
        </div>
          <Link to="/calculator">Entrar</Link>
        <div>
          <p>Não tem uma conta? <a href="#">Registrar</a></p>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
