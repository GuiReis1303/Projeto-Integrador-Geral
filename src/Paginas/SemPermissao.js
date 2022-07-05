import React from "react";
import { Link } from "react-router-dom";

const SemPermissao = () => {
    require('../Styles/SemAcesso.css')
    return ( 
        <div>

        <div className="semacesso">
          
            <div className="semacesso-right">
                <img className="caixacursos-carouselImagem" src={require("./Imagens/sempermissao.png")}/>
                </div>
            <div className="semacesso-left">
                <div className="semacesso-left-texto">
                    <h2>Você precisa ter assinado algum plano para acessar essa página.</h2>
                   
                    
                    <div className="semacesso-left-botao">
                        <Link to={'/'}><button>Voltar</button></Link>              
                    </div>
                    <div className="semacesso-cadastro">
                <h2> Deseja Assinar um Plano?<Link className='text-link' to="/Cadastro"><b> Assine</b> </Link>  agora!</h2>
                <Link to={'/Assinatura'}><button>Assinar</button></Link>
                </div>
                </div>
               
            </div>
            
        </div>
     </div>
     );
}
 
export default SemPermissao;