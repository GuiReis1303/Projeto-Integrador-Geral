import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faAt} from "@fortawesome/free-solid-svg-icons";
import Rodape from "../Modulos/Rodape";


const Cadastro = () => {
    require('./Cadastro.css')
    return ( 
    <div className="bodyCadastro">  

        <div className="cadastro">
            <div className="caixaCadastro">
                
                <form>
                    <FontAwesomeIcon icon={faUser} className="iconCadastro"/><input className="phcadastro" required minlenght="3" type="nick" placeholder="Digite seu Usuário..."></input><br/>
                    
                    <FontAwesomeIcon icon={faAt} className="iconCadastro"/><input className="phcadastro" type="email" placeholder="Digite seu Email..."></input> <br/>
         
                    <FontAwesomeIcon icon={faLock} className="iconCadastro"/><input className="phcadastro" required minlenght="10" type="password" placeholder="Digite uma Senha..."></input><br/>
                  
                    <FontAwesomeIcon icon={faLock} className="iconCadastro"/><input className="phcadastro" required minlenght="10" type="password" placeholder="Confirme sua Senha..."></input><br/>
                    <div className="botoesCadastro">
                    <button type="submit" className="botaoEnviar">Enviar</button>
                    
                    <Link to={"/"}>
                        <button type="cancel" className="botaoCancela">Cancelar</button>
                    </Link>

                    </div>
                </form>
            </div>
        </div>
        <Rodape/>   
    </div>    
     );
}
 
export default Cadastro;