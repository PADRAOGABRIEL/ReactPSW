import React from 'react'
import Header from '../../components/header/header'
import "../../styles/index.css"


const CreatePost = () => {
  return (
    <>
    <Header/>

    <header>
        <div className="header-top">
            <p className="pointer"></p>
            <div>
            <img src="./assets/logo-branca.svg"/>
            <img src="https://generation-sessions.s3.amazonaws.com/774de11c4dc2ef4ef1e229960966e36e/img/mask-group@2x.png"/>
            </div>
        </div>

        <div className="header-botton">
            <div>
                <h2>Cadastre suas trilhas,<br/>Divulgue o aprendizado!</h2>
                <p className="slogan">Para cadastrar suas trilhas, o primeiro passo é <br/>preencher esse formulário</p>
            </div>
        </div>

        

    </header>

    </>
  )
}

export default CreatePost