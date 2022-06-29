import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { ReactNotifications, Store } from 'react-notifications-component';
import "animate.css"
import 'react-notifications-component/dist/theme.css'

const Login2 = (props) => {
    const navigate = useNavigate()

    //NOTIFICAÇÕES
    const botaoSucessoLogin = () =>{
        Store.addNotification({
            title: "--- Login Sucesso ---",
            message: "Logado com Sucesso!",
            type: "success",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],

            dismiss: {
                duration: 2000,
                showIcon: true
            },
            width: 600
        })
    }

    const botaoErroLoginoVazio = () =>{
        Store.addNotification({
            title: "--- Login Vazio ---",
            message: "Algum Campo está Vazio! Preencha e tente novamente!",
            type: "warning",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],

            dismiss: {
                duration: 2000,
                showIcon: true
            },
            width: 600
        })
    }

    const botaoErroLogin = () =>{
        Store.addNotification({
            title: "--- Login Erro ---",
            message: "Usuário ou Senha Incorretos!",
            type: "danger",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],

            dismiss: {
                duration: 2000,
                showIcon: true
            },
            width: 600
        })
    }


    const botaoSucessoCadastro = () =>{
        Store.addNotification({
            title: "--- Cadastro Sucesso ---",
            message: "Usuário Cadastrado com Sucesso!",
            type: "success",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],

            dismiss: {
                duration: 2000,
                showIcon: true
            },
            width: 600
        })
    }

    const botaoErroCadastroVazio = () =>{
        Store.addNotification({
            title: "--- Cadastro Vazio ---",
            message: "Algum Campo está Vazio! Preencha e tente novamente!",
            type: "warning",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],

            dismiss: {
                duration: 2000,
                showIcon: true
            },
            width: 600
        })
    }

    const botaoErroCadastro = () =>{
        Store.addNotification({
            title: "--- Cadastro Erro ---",
            message: "Não foi Possível Cadastrar o Usuário!",
            type: "danger",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],

            dismiss: {
                duration: 2000,
                showIcon: true
            },
            width: 600
        })
    }  
    //FIM DAS NOTIFICAÇÕES


    //FUNÇÃO DE SELEÇÃO DE PAGINA
    const mudarCadastro = () =>{
        document.getElementById('cadastro').classList.remove('invisivel');
        document.getElementById('login').classList.add('invisivel')
    }

    const mudarLogin = () =>{
        document.getElementById('login').classList.remove('invisivel');
        document.getElementById('cadastro').classList.add('invisivel')
    }
    //FIM DA FUNÇÃO DE SELEÇÃO DE PAGINA

    const verificarDados = (obj) => {
        console.log("Antes do IF")
        if (obj.email == ''|| obj.nick == '' || obj.senha == ''){
            botaoErroCadastroVazio();
        } else{
            console.log("Antes do AXIOS")
            const axios = require('axios').default;

            console.log(obj)

            axios.post('http://localhost:3001/Usuario', obj)
            .then(function (response) {
                console.log(response);
                console.log(response.status)
                if (response.status == 200){
                    botaoSucessoCadastro()
                    setTimeout(() => {
                        navigate("/")
                    }, 1000);
                }
            })
            .catch(function (error) {
                console.log(error);
                botaoErroCadastro()
            })

           
        }
    }

    const enviarCadastro = () => {
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

      }

    const enviarLogin = () => {
        const usuario = document.querySelector("input[name='usuario']").value
        const senha = document.querySelector("input[name='senha']").value
        console.log(usuario, senha)
        const obj = {
            nick: usuario,
            senha: senha

        }
        
        const axios = require('axios').default;

            if (obj.nick == '' || obj.senha == ''){
                botaoErroLoginoVazio();
            } else{

                axios.post('http://localhost:3001/Verifica', obj)
                .then(function (response) {
                    if (response.data == 0){
                        botaoErroLogin();
                    } else{

                        const idusuario = response.data
                        console.log(idusuario[0])
                        localStorage.setItem("id", idusuario[0].iduser)
                        botaoSucessoLogin();

                        setTimeout(() => {
                            navigate("/")
                        }, 1000);
                    }
                    
                    console.log(response);

                })
                .catch(function (error) {
                    console.log(error);
                })
            }

    }

    require('../Styles/Cadastro.css')
    return ( 
        <div className="body">
            <ReactNotifications/>
            <div className={"main-login" + (props.cadastro ? " invisivel" : "")} id="login">
                <div className="left-login">
                    <h1> <a>Faça login</a><br/> e comece a estudar!</h1>
                    <img src={require("./Imagens/aulaonline.png")} alt="Aula Online Animação" className="left-login-image"/>
                </div>
                <div className="right-login">
                    <div className="card-login">
                        <h2><Link className="link-icon" to={'/'}><FontAwesomeIcon icon={faCircleArrowLeft} className="icon-voltar"/></Link> LOGIN</h2>
                        <div className="textfield">
                            <label for="usuario">Usuário</label>
                            <input type="text" name="usuario" placeholder="Usuário..." />
                        </div>
                        <div className="textfield">
                            <label for="senha">Senha</label>
                            <input type="password" name="senha" placeholder="Senha..." />
                        </div>
                        <button className="btn-login" onClick={() => enviarLogin()}>Login</button>
                        <p className="criar-conta">Não possui conta? <a className="criar-conta-a" onClick={() => mudarCadastro()}>Cadastre-se</a></p>
                    </div>
                </div>
            </div>
            <div className={"main-cadastro" + (props.cadastro ? "" : " invisivel")} id="cadastro">
            <div className="rigth-cadastro" id="imgCadastroCima">
                    <h1>  Cadastre-se<br/> E comece a estudar!</h1>
                    <img src={require("./Imagens/aulaonline.png")} alt="Aula Online Animação" className="left-login-image"/>
                </div>
                <div className="left-cadastro">
                    <div className="card-cadastro">
                        <h2><Link className="link-icon" to={'/'}><FontAwesomeIcon icon={faCircleArrowLeft} className="icon-voltar"/></Link> CADASTRO</h2>
                        <form className="formularioteste">
                        <div className="textfield">
                            <label for="email"> Email</label>
                            <input type="email" name="email" placeholder="Email..." />
                        </div>
                        <div className="textfield">
                            <label for="usuario">Usuário</label>
                            <input type="text" name="usuariocadastro" placeholder="Usuário..." />
                        </div>
                        <div className="textfield">
                            <label for="senha">Senha</label>
                            <input type="password" name="senhacadastro" placeholder="Senha..." />
                        </div>
                        </form>
                        <button className="btn-cadastro" onClick={() => enviarCadastro()}>Cadastre-se</button>
                        <p className="logar-conta">Já possui conta? <a className="criar-conta-a" onClick={() => mudarLogin()}>Login</a></p>
                    </div>
                </div>
                <div className="right-cadastro" id="imgCadastroBaixo">
                    <h1> <a> Cadastre-se </a><br/> E comece a estudar!</h1>
                    <img src={require("./Imagens/aulaonline.png")} alt="Aula Online Animação" className="left-login-image"/>
                </div>
            </div>
        </div>
     );
}

 
export default Login2;