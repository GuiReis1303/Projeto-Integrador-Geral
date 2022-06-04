import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    require('./Login.css')
    return ( 
        <div className="bodyLogin">  
            <div className="login">
                <div className="caixaLogin">
                    <form>
                        <FontAwesomeIcon icon={faUser} className="iconLogin"/><input className="phlogin" required minlenght="3" type="nick" placeholder="Email ou usuário..."></input><br/>
            
                        <FontAwesomeIcon icon={faLock} className="iconLogin"/><input className="phlogin" required minlenght="10" type="password" placeholder="Senha..."></input><br/>
                        <div className="botoes">
                        <button type="submit" className="botaoEnviar">Enviar</button>
                        
                        <Link to={"/"}>
                            <button type="cancel" className="botaoCancela">Cancelar</button>
                        </Link>

                        </div>
                    </form>
                </div>
            </div>
        </div>    
     );
}
 
export default Login;