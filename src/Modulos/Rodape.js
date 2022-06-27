import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Rodape = () => {
    require('../Styles/Rodape.css')
    return ( <div>
        <div className="rodape">
            <div className="rodape-logo">
                <img src={require("./Imagens/logobranca.png")}/>
               
            </div>

            <div className="rodape-informacao">
                <div className="rodape-inicio">
                    <h3>Inicio</h3><br/>
                    
                    
                    <Link className="rodape-edit" to="/">Home</Link><br/>
                    <Link className="rodape-edit" to="/Assinatura">Assinatura</Link><br/>
                    <Link className="rodape-edit" to="/Cursos">Cursos</Link><br/>
                </div>

                <div className="rodape-sobrenos">
                    <h3>Sobre-nós</h3><br/>
                    <Link href="/Manutencao" className="rodape-edit" to="/Manutencao">Historia</Link><br/>
                </div>

                <div className="rodape-suporte">
                    <h3>Suporte</h3><br/>
                    <Link href="/Faq" className="rodape-edit" to="/Faq">FAQ</Link><br/>
                    <Link href="/Comunidade" className="rodape-edit" to="/Comunidade">Comunidade</Link><br/>
                </div>
            </div>
           
            <div className="rodape-social">
                <a href=""><FontAwesomeIcon icon={faFacebook} className="rodape-icon"/></a>
                <a href=""><FontAwesomeIcon icon={faInstagram} className="rodape-icon"/></a>
                <a href=""><FontAwesomeIcon icon={faYoutube} className="rodape-icon"/></a>
               
            </div>
            <span>Station ®</span>
        </div>   
        
      </div>
     );
}
 
export default Rodape;