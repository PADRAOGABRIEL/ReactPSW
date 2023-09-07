/* eslint-disable no-unused-vars */
import React from 'react';
import '../inicial/home.css';
import '../inicial/responsive.css';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src="../../assets/logo.svg" alt="Logomarca" />
          <a href="../login"> <span></span> Login</a>
        </header>

        <main>
          <h1>Descubra o instrutor ideal para você!</h1>
          <p>
            Este é o lugar perfeito para achar um especialista que irá te ajudar
            a alcançar resultados excelentes no campo que mais importa para
            você.
          </p>
          <a href="../professor/index.html">
            <span></span><strong>Estudar</strong>
          </a>
        </main>
      </div>
    </div>
  );
}

export default Home;
