import React from "react";
import { Link } from "react-router-dom";

const Rodape = () => {
    require('./Rodape.css')
    return ( 
        <div className="rodape">
            <div className="rodapeLogo">
                <img src={require("./logobranca.png")}/>
            </div>

            <div className="rodapeInformacao">
                <div className="rodapeInicio">
                    <h3>Inicio</h3>
                    <Link className="editRodape" to="/">Home</Link><br/>
                    <Link className="editRodape" to="/Assinatura">Assinatura</Link><br/>
                    <Link className="editRodape" to="/CursosOferecidos">Cursos Oferecidos</Link><br/>
                </div>

                <div className="rodapeSobrenos">
                    <h3>Sobre-nós</h3>
                </div>

                <div className="rodapeSuporte">
                    <h3>Suporte</h3>
                    <Link className="editRodape" to="/Faq">FAQ</Link><br/>
                    <Link className="editRodape" to="/Comunidade">Comunidade</Link><br/>
                </div>
            </div>

            <div className="rodapeSocial">
                <img src={require("./facebook.png")}/>
                <img src={require("./instagram.png")}/>
                <img src={require("./youtube.png")}/>
                <br/><br/>
                <button>Contato</button>
            </div>
        </div>
     );
}
 
export default Rodape;