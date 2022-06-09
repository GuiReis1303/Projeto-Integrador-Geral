import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Rodape = () => {
    require('./Rodape.css')
    return ( 
        <div className="rodape">
            <div className="rodapeLogo">
                <img src={require("./Imagens/logobranca.png")}/>
            </div>

            <div className="rodapeInformacao">
                <div className="rodapeInicio">
                    <h3>Inicio</h3><br/>
                    
                    
                    <Link className="editRodape" to="/">Home</Link><br/>
                    <Link className="editRodape" to="/Assinatura">Assinatura</Link><br/>
                    <Link className="editRodape" to="/Cursos">Cursos</Link><br/>
                </div>

                <div className="rodapeSobrenos">
                    <h3>Sobre-nós</h3><br/>
                    
                </div>

                <div className="rodapeSuporte">
                    <h3>Suporte</h3><br/>
                    <Link className="editRodape" to="/Faq">FAQ</Link><br/>
                    <Link className="editRodape" to="/Comunidade">Comunidade</Link><br/>
                </div>
            </div>
            
            <div className="rodapeSocial">
                <FontAwesomeIcon icon={faFacebook} className="rodapeicon"/>
                <FontAwesomeIcon icon={faInstagram} className="rodapeicon"/>
                <FontAwesomeIcon icon={faYoutube} className="rodapeicon"/>
            </div>
        </div>   
     );
}
 
export default Rodape;