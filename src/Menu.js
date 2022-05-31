import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Menu = () => {
    require('./Menu.css');
    return ( 
        <div className="menu">
            <div className="itemsmenu">
                <Link to="/" style={{ textdecoration: 'none'}}>Home</Link> | 
                <Link to="/Assinatura">Assinatura</Link> |
                <Link to="/CursosOferecidos">Cursos Oferecidos</Link>
            </div>
            
        </div>
     );
}
 
export default Menu;