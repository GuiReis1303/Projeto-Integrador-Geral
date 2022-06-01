import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    require('./Menu.css');
    return ( 
        <div className="menu">
            <div className="imagem">
            <img src={require("./logobranca.png")}/>
            </div>
            <div className="link">
                <Link className="editMenuH1" to="/">Home</Link>
                <Link className="editMenuH1" to="/Assinatura">Assinatura</Link>
                <Link className="editMenuH1" to="/CursosOferecidos">Cursos Oferecidos</Link>
                <Link className="editMenuH1" to="/Comunidade">Comunidade</Link>
                <Link className="editMenuH1" to="/Faq">FAQ</Link>
            </div>
            <div className="login">
                <Link className="editMenuH2" to="/Cadastro">Cadastre-se</Link>
                <Link className="editMenuH2" to="/Login">Login</Link>
            </div>
            
        </div>
     );
}
 
export default Menu;