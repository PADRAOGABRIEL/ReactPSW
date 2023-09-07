import React from 'react';
import './styles/style.css';
import '../../styles/index.css';
import logo from '../../assets/logo-branca.svg';

const HeaderLogged= () => {
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
            <img src="https://generation-sessions.s3.amazonaws.com/774de11c4dc2ef4ef1e229960966e36e/img/mask-group@2x.png"></img>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderLogged;
