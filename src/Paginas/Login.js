import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    require('./Login.css')
    return ( 
        <div className="login">
            <div className="caixaLogin">
                <form>
                    <input type="nick" placeholder="Email ou Nick"></input>
                    <input type="password" placeholder="Senha"></input>

                    <button type="submit" className="">Enviar</button>
                    <Link to={"/"}>
                        <button type="cancel" className="">Cancelar</button>
                    </Link>
                </form>
            </div>
        </div>
     );
}
 
export default Login;