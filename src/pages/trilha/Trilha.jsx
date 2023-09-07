/* eslint-disable no-unused-vars */
import React from 'react';
import '../trilha/styles/index.css';
import '../trilha/styles/style.css';

import logo from '../../assets/logo-branca.svg';

const TrilhaConhecimento = () => {
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
          </div>
        </div>
      </header>
      <main>
        <div className="main-container">
          <div className="orange-section">
            <h1>
              Estas são as trilhas disponíveis<br />com base nos seus interesses.
            </h1>
            <div className="filtros">
              <div>
                <label htmlFor="professorBusca">Digite o nome do Professor</label>
                <input
                  id="professorBusca"
                  name="buscaProfessor"
                  type="text"
                  placeholder="Buscar..."
                />
              </div>
              <div>
                <label htmlFor="trilhaBusca">Digite o nome da Trilha</label>
                <input
                  id="trilhaBusca"
                  name="buscaTrilha"
                  type="text"
                  placeholder="Buscar..."
                />
              </div>
              <div>
                <label>Disciplinas Pré-Selecionadas?</label>
                <select name="disciplinas">
                  <option value="">Escolha uma Disciplina</option>
                  <option value="p1">Programação 1</option>
                  <option value="psw">PSW</option>
                  <option value="csharp">C#</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="javascript">JavaScript</option>
                  <option value="cpp">C++</option>
                </select>
              </div>
            </div>
          </div>
          <div id="listagem-trilhas" className="cards">
            <div className="card1">
              <h2>Por que buscar um sonho e seguir essa direção?</h2>
              <p>Natan Balthazar</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <div className="button">
                <a href="../professor/index.html">
                  <strong>Entrar na trilha</strong><span></span>
                </a>
              </div>
            </div>
            <div className="card1">
              <h2>Por que buscar um sonho e seguir essa direção?</h2>
              <p>Natan Balthazar</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <div className="button">
                <a href="../professor/index.html">
                  <strong>Entrar na trilha</strong><span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TrilhaConhecimento;
