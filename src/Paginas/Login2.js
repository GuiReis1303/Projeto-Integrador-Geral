import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Login2 = (props) => {

        
    const mudarCadastro = () =>{
        document.getElementById('cadastro').classList.remove('invisivel');
        document.getElementById('login').classList.add('invisivel')
    }

    const mudarLogin = () =>{
        document.getElementById('login').classList.remove('invisivel');
        document.getElementById('cadastro').classList.add('invisivel')
    }

    const verificarDados = (obj) => {
        if (obj.email == '' && obj.nick == '' && obj.senha == ''){

        }
    }

    const enviarCadastro = () =>{
        const email = document.querySelector("input[name='email']").value
        const usuariocadastro = document.querySelector("input[name='usuariocadastro']").value
        const senhacadastro = document.querySelector("input[name='senhacadastro']").value
        console.log(email, usuariocadastro, senhacadastro)
        const obj = {
            email: email,
            nick: usuariocadastro,
            senha: senhacadastro
        }

        verificarDados(obj);

        const axios = require('axios').default;

        axios.post('http://localhost:3001/Usuario', obj)
        .then(function (response) {
            
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })

      }

    require('../Styles/Cadastro.css')
    return ( 
        <div className="body">
            <div className={"main-login" + (props.cadastro ? " invisivel" : "")} id="login">
                <div className="left-login">
                    <h1> Faça Login<br/> E comece a estudar</h1>
                    <img src={require("./Imagens/aulaonline.png")} alt="Aula Online Animação" className="left-login-image"/>
                </div>
                <div className="right-login">
                    <div className="card-login">
                        <h2><Link className="link-icon" to={'/'}><FontAwesomeIcon icon={faCircleArrowLeft} className="icon-voltar"/></Link> LOGIN</h2>
                        <div className="textfield">
                            <label for="usuario"> Usuário</label>
                            <input type="text" name="usuario" placeholder="Usuário" />
                        </div>
                        <div className="textfield">
                            <label for="senha"> Senha</label>
                            <input type="password" name="senha" placeholder="Senha" />
                        </div>
                        <button className="btn-login">Login</button>
                        <p className="criar-conta">Não possui conta? <a className="criar-conta-a" onClick={() => mudarCadastro()}>Cadastre-se</a></p>
                    </div>
                </div>
            </div>
            <div className={"main-cadastro" + (props.cadastro ? "" : " invisivel")} id="cadastro">
            <div className="rigth-cadastro" id="imgCadastroCima">
                    <h1> Cadastre-se<br/> E comece a estudar</h1>
                    <img src={require("./Imagens/aulaonline.png")} alt="Aula Online Animação" className="left-login-image"/>
                </div>
                <div className="left-cadastro">
                    <div className="card-cadastro">
                        <h2><Link className="link-icon" to={'/'}><FontAwesomeIcon icon={faCircleArrowLeft} className="icon-voltar"/></Link> CADASTRO</h2>
                        <div className="textfield">
                            <label for="email"> Email</label>
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="textfield">
                            <label for="usuario"> Usuário</label>
                            <input type="text" name="usuariocadastro" placeholder="Usuário" />
                        </div>
                        <div className="textfield">
                            <label for="senha"> Senha</label>
                            <input type="password" name="senhacadastro" placeholder="Senha" />
                        </div>
                        <button className="btn-cadastro" onClick={() => enviarCadastro()}>Cadastre-se</button>
                        <p className="logar-conta">Já possui conta? <a className="criar-conta-a" onClick={() => mudarLogin()}>Login</a></p>
                    </div>
                </div>
                <div className="right-cadastro" id="imgCadastroBaixo">
                    <h1> Cadastre-se<br/> E comece a estudar</h1>
                    <img src={require("./Imagens/aulaonline.png")} alt="Aula Online Animação" className="left-login-image"/>
                </div>
            </div>
        </div>
     );
}

 
export default Login2;