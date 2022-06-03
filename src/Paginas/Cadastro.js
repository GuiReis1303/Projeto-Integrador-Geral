import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

const Cadastro = () => {
    require('./Cadastro.css')
    return ( 
     <div className="bodyCadastro">  
    
        <div className="cadastro">
            <div >

            
            </div>
            <div className="caixaLogin">
                
                <form>
               
           <input    className="phcadastro" required minlenght="3" type="nick" placeholder="Digite seu Usuário..."></input>
           
                    <input className="phcadastro" type="email" placeholder="Digite seu Email..."></input>  <br/>
         
                    <input className="phcadastro" required minlenght="10" type="password" placeholder="Digite uma Senha..."></input>
                  
                    <input className="phcadastro" required minlenght="10" type="password" placeholder="Confirme sua Senha..."></input> 
                <br/>
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
 
export default Cadastro;