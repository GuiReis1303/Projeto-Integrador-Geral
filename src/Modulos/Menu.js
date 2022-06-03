import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    require('./Menu.css');
    return ( 
        <div className="menu" id="classMenu">
            <div className="imagem">
                <Link to="/"><img src={require("./logobranca.png")}/></Link>
            </div>
            <div className="link">
                <Link className="editMenuH1" to="/">Home</Link>
                <Link className="editMenuH1" to="/Assinatura">Assinatura</Link>
                <Link className="editMenuH1" to="/Cursos">Cursos</Link>
                <Link className="editMenuH1" to="/Comunidade">Comunidade</Link>
                <Link className="editMenuH1" to="/Faq">FAQ</Link>
            </div>
            <div className="loginMenu">
                <Link className="editMenuH2" to="/Cadastro">Cadastro</Link>
                <Link className="editMenuH2" to="/Login">Login</Link>
            </div>
            
        </div>
     );
}
 
export default Menu;