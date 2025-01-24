import { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaUser, FaLock} from 'react-icons/fa';
import "./Login.css";


const LoginPage = () => {
  return (
    <div>
      <form action="">
        <h1>LoginPage</h1>
        <div>
          <input type="email" placeholder='E-mail'></input>
          <FaUser className="icon"/>
        </div>
        <div>
          <input type='password' placeholder='Senha'></input>
          <FaLock className="icon"/>
        </div>
        <div className="recall-forget">
          <div>
            <input type="checkbox" ></input>
            Lembre de mim
          </div>
          <a href="#">Esqueceu a senha?</a>
        </div>
        <Link to="/calculator">Entrar</Link>
        <div className="signup-link">
          <p>Não tem uma conta? <a href="#">Registrar</a></p>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
