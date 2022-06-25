import React from "react";
import { Link } from "react-router-dom";

const SemAcesso = () => {
    require('../Styles/SemAcesso.css')
    return ( 
        <div>

        <div className="semacesso">
          
            <div className="semacesso-right">
                <img className="caixacursos-carouselImagem" src={require("./Imagens/semacesso.png")}/>
                </div>
            <div className="semacesso-left">
                <div className="semacesso-left-texto">
                    <h2>Você precisa estar logado para acessar essa página.</h2>
                   
                    
                    <div className="semacesso-left-botao">
                        <Link to={'/'}><button>Voltar</button></Link>
                        <Link to={'/Login2'}><button id="blsemacesso">Login</button></Link>
                      
                    </div>
                    <div className="semacesso-cadastro">
                <h2> Não possui conta?<Link className='text-link' to="/Cadastro"><b> Cadastre-se</b> </Link>  agora!</h2>
                <Link to={'/Cadastro'}><button>Cadastro</button></Link>
                </div>
                </div>
               
            </div>
            
        </div>
     </div>
     );
}
 
export default SemAcesso;