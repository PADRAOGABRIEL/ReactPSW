import React from 'react'
import HeaderLogged from '../../components/headerLogged/HeaderLogged'
import "../../styles/index.css"
import "./styles/style.css"

const CreatePost = () => {
  return (
    <>
    <HeaderLogged/>

    <div className="subheader">
    
        <div className="header-botton">
          <div>
            <h2>
              Cadastre suas trilhas,
              Divulgue o aprendizado!
            </h2>
            <br/>
            <p className="slogan">
              Para cadastrar suas trilhas, o primeiro passo é
              preencher esse formulário
            </p>
          </div>
        </div>
      <br/>

      <section className="container2">
        <form>
          <p>Escreva sua postagem</p>
          <hr />
          <label>Título da postagem</label>
          <input type="text" />
          <label>Descrição da postagem</label>
          <textarea></textarea>

          <div className="send-box">
            <div>
              <img src="" alt="Imagem Importante" />
              <p>
                Importante!
            <br />
                Preencha todos os dados
              </p>
            </div>
            <button>Salvar cadastro</button>
          </div>
        </form>
      </section>
    </div>
    </>
  )
}

export default CreatePost