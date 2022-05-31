import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Menu = () => {
    require('./Menu.css');
    return ( 
        <div className="menu">
            <div className="imagem">
                <img src="https://www.jotform.com/pt/resources/assets/logo-nb/jotform-logo-dark-400x200.png" />
            </div>
            <div className="link">
                <Link to="/" style={{ textdecoration: 'none'}}>Home</Link> | 
                <Link to="/Assinatura">Assinatura</Link> |
                <Link to="/CursosOferecidos">Cursos Oferecidos</Link>
            </div>
            <div className="login">
                <Link to="/Cadastro">Cadastre-se</Link> |
                <Link to="/Login">Login</Link>
            </div>
            
        </div>
     );
}
 
export default Menu;