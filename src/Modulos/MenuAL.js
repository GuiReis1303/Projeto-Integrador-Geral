import React from "react";
import { Link } from "react-router-dom";

const MenuAL = () => {
    require('./MenuAL.css');
    return (
        <div className="menu">
            <div className="imagem">
                <Link to="/"><img src={require("./logobranca.png")}/></Link>
            </div>
            <div className="loginMenu">
                <Link className="editMenuH2" to="/Cadastro">Cadastro</Link>
                <Link className="editMenuH2" to="/Login">Login</Link>
            </div>
            
        </div>
     );
}
 
export default MenuAL;