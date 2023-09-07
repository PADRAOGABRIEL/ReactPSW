/* eslint-disable no-unused-vars */
import React from 'react';
import './styles/style.css';
import './styles/index.css';
import logo from '../../assets/logo-branca.svg';

const Professor = () => {
  return (
    <div>
      <header>
        <div className="header">
          <a href="../inicial">
            <img src={logo} alt="" />
          </a>
          <div className="container">
            <nav className="navigation">
              <a href="../inicial/index.html">Home</a>
              <a href="#">Monitores</a>
              <a href="../trilha/index.html">Trilhas de Conhecimento</a>
              <a href="../sobre/index.html">Sobre nós</a>
              <a href="../contato/index.html">Contatos</a>
            </nav>
            <div className="buttons">
              <a href="../cadastro/index.html" className="create-account-button">
                Crie uma conta
              </a>
              <a href="../login/index.html" className="login-button">
                Login <span></span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Professor;
