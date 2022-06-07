import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Login2 = () => {
    const mudarCadastro = () =>{
        document.getElementById('cadastro').classList.remove('invisivel');
        document.getElementById('login').classList.add('invisivel')
    }

    const mudarLogin = () =>{
        document.getElementById('login').classList.remove('invisivel');
        document.getElementById('cadastro').classList.add('invisivel')
    }

    const enviarCadastro = () =>{
        const email = document.getElementsByName('email').values
        const usuario = document.getElementsByName('usuario').values
        const senha = document.getElementsByName('senha').values
        
        alert(email + usuario + senha)
    }

    require('./Login2.css')
    return ( 
        <div>
            <div className="main-login" id="login">
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
            <div className="main-cadastro invisivel" id="cadastro">
            <div className="rigth-cadastro" id="imgCadastroCima">
                    <h1> Cadastre-se<br/> E comece a estudar</h1>
                    <img src={require("./Imagens/aulaonline.png")} alt="Aula Online Animação" className="left-login-image"/>
                </div>
                <div className="left-cadastro">
                    <div className="card-cadastro">
                        <h2><Link className="link-icon" to={'/'}><FontAwesomeIcon icon={faCircleArrowLeft} className="icon-voltar"/></Link> CADASTRO</h2>
                        <div className="textfield">
                            <label for="usuario"> Email</label>
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="textfield">
                            <label for="usuario"> Usuário</label>
                            <input type="text" name="usuario" placeholder="Usuário" />
                        </div>
                        <div className="textfield">
                            <label for="senha"> Senha</label>
                            <input type="password" name="senha" placeholder="Senha" />
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