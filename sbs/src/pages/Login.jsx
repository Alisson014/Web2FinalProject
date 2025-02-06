import React from "react";
import '../styles/Login.css';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import img from '../assets/img/bro.png';

function Login(){
    return(
        <div className="Login">
            <img className="imagemLogin" src={img} alt="Imagem Saude e bem-estar Login"/>
            <div className="ContainerForm">
                <h1>Saúde e Bem-Estar</h1>
                <p>Acesse ou crie sua conta</p>
                <form>
                    <FloatingLabel controlId="EmailId" label="E-mail: " >
                        <Form.Control type="email" placeholder="name@exemplo.com" />
                    </FloatingLabel>

                    <FloatingLabel controlId="NomeId" label="Nome: " >
                        <Form.Control type="text" placeholder="Fulano..." />
                    </FloatingLabel>

                    <FloatingLabel controlId="SenhaId" label="Senha" >
                        <Form.Control type="password" placeholder="Senha" />
                    </FloatingLabel>

                    <Form.Control type="submit"/>
                    <Form.Control type="button" value={"Cadastrar"}/>

                    <input type="checkbox" id="SaveId" name="Save"/>
                    &nbsp;&nbsp;
                    <label>Salvar informações</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#">Esqueci a senha</a>
                </form>    
            </div>
        </div>
    );
}

export default Login;