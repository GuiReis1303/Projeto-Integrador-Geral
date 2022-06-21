import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Rodape = () => {
    require('../Styles/Rodape.css')
    return ( <div>
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
                    <Link className="editRodape" to="/Faq">FAQ</Link><br/>
                </div>

                <div className="rodapeSuporte">
                    <h3>Suporte</h3><br/>
                    <Link className="editRodape" to="/Faq">FAQ</Link><br/>
                    <Link className="editRodape" to="/Historia">Historia</Link><br/>
                </div>
            </div>
           
            <div className="rodapeSocial">
                <a href=""><FontAwesomeIcon icon={faFacebook} className="rodapeicon"/></a>
                <a href=""><FontAwesomeIcon icon={faInstagram} className="rodapeicon"/></a>
                <a href=""><FontAwesomeIcon icon={faYoutube} className="rodapeicon"/></a>
               
            </div>
            <span>Station ®</span>
        </div>   
        
      </div>
     );
}
 
export default Rodape;