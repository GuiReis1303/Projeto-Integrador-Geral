import React from "react";
import { Link } from "react-router-dom";

const Manutencao = () => {
    require('../Styles/SemAcesso.css')
    return ( 
        <div className="semacesso">

            <div className="semacesso-right">
                <img className="caixacursos-carouselImagem" src={require("./Imagens/manutencao1.png")}/>
                </div>
            <div className="semacesso-left">
                <div className="semacesso-left-texto">
                    <h2> Ops você não pode ver isso!</h2>
                    <p>Essa página está em manutenção no momento, volte mais tarde!</p>
                    
                    <div className="semacesso-left-botao">
                        <Link to={'/'}><button>Voltar</button></Link>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default Manutencao;