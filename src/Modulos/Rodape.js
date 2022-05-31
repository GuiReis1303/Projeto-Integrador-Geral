import React from "react";
import { Link } from "react-router-dom";

const Rodape = () => {
    require('./Rodape.css')
    return ( 
        <div className="rodape">
            <div className="rodapeLogo">
                <img src="https://www.jotform.com/pt/resources/assets/logo-nb/jotform-logo-dark-400x200.png" />
            </div>

            <div className="rodapeInicio">
                <h3>Inicio</h3>
                <Link to="/">Home</Link><br/>
                <Link to="/Assinatura">Assinatura</Link><br/>
                <Link to="/CursosOferecidos">Cursos Oferecidos</Link><br/>
            </div>

            <div className="rodapeSobrenos">
                <h3>Sobre-nós</h3>
            </div>

            <div className="rodapeSuporte">
                <h3>Suporte</h3>
                <Link to="/Faq">FAQ</Link><br/>
                <Link to="/Comunidade">Comunidade</Link><br/>
            </div>

            <div className="rodapeSocial">

            </div>
        </div>
     );
}
 
export default Rodape;