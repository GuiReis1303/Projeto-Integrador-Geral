import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

const Cadastro = () => {
    require('./Cadastro.css')
    return ( 
        <div className="cadastro">
            <div className="caixaLogin">
                <form>
                    <input type="email" placeholder="Digite seu Email"></input>
                    <input type="nick" placeholder="Digite seu Nick"></input>
                    <input type="password" placeholder="Digite uma Senha"></input>

                    <button type="submit" className="">Enviar</button>
                    
                    <Link to={"/"}>
                        <button type="cancel" className="">Cancelar</button>
                    </Link>
                </form>
            </div>
        </div>
     );
}
 
export default Cadastro;