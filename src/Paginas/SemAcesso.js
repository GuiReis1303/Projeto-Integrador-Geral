import React from "react";
import { Link } from "react-router-dom";

const SemAcesso = () => {
    require('./SemAcesso.css')
    return ( 
        <div className="semacesso">

            <div className="semacesso-right">
                <img className="caixacursos-carouselImagem" src={require("./Imagens/semacesso.png")}/>
                </div>
            <div className="semacesso-left">
                <div className="semacesso-left-texto">
                    <h2> Parece que você não tem acesso para ver isso!</h2>
                    <p>Logue para conseguir acessar essa página</p>
                    
                    <div className="semacesso-left-botao">
                        <Link to={'/'}><button>Voltar</button></Link>
                        <Link to={'/Login2'}><button>Login</button></Link>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default SemAcesso;