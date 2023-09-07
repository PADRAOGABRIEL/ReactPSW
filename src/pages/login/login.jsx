/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '..login/login.css';
import '../login/responsive.css';
import '../../styles/main.css';
import logo from '../../assets/logo.svg';
import bgImage from '../../assets/login/bg.svg';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    setShowPassword(!showPassword);
    setPasswordType(showPassword ? 'password' : 'text');
  };

  return (
    <div id="page" className="flex">
      <div>
        <header>
          <a href="../inicial">
            <img src={logo} alt="" />
          </a>
        </header>
        <main>
          <div className="headline">
            <h1>Acesse a plataforma</h1>
            <p>Faça login ou registre-se para começar a estudar ainda hoje.</p>
          </div>
          <form action="">
            <div className="input-wrapper">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Digite seu e-mail"
              />
            </div>
            <div className="input-wrapper">
              <div className="label-wrapper flex">
                <label htmlFor="senha">Senha</label>
                <a href="#">Esqueceu a senha?</a>
              </div>
              <input
                id="senha"
                name="senha"
                type={passwordType}
                placeholder="Digite sua senha"
              />
              <img
                onClick={togglePassword}
                className={`eye ${showPassword ? 'hide' : ''}`}
                src="../../assets/login/eye-off.svg"
                alt=""
              />
              <img
                onClick={togglePassword}
                className={`eye ${showPassword ? '' : 'hide'}`}
                src="../../assets/login/eye.svg"
                alt=""
              />
            </div>

            <button type="submit">Entrar</button>

            <div className="create-account">
              Ainda não tem uma conta? <a href="../cadastro/index.html">Inscreva-se</a>
            </div>
          </form>
        </main>
      </div>
      <img src={bgImage} alt="" />
    </div>
  );
};

export default Login;
