import React from "react";
import { Link } from "react-router-dom";

const Rodape = () => {
    require('./Rodape.css')
    return ( 

       
        <div className="rodape">
            
            <div className="rodapeLogo">
                <img src={require("./logopreta.png")}/>
            </div>

            <div className="rodapeInformacao">
                <div className="rodapeInicio">
                    <h3>Inicio</h3><br/>
                    
                    
                    <Link className="editRodape" to="/">Home</Link><br/><br/>
                    <Link className="editRodape" to="/Assinatura">Assinatura</Link><br/><br/>
                    <Link className="editRodape" to="/CursosOferecidos">Cursos Oferecidos</Link><br/><br/>
                </div>

                <div className="rodapeSobrenos">
                    <h3>Sobre-nós</h3><br/>
                    
                </div>

                <div className="rodapeSuporte">
                    <h3>Suporte</h3><br/>
                    <Link className="editRodape" to="/Faq">FAQ</Link><br/><br/>
                    <Link className="editRodape" to="/Comunidade">Comunidade</Link><br/><br/>
                </div>
            </div>

            <div className="rodapeSocial">
                <img src={require("./facebook.png")}/>
                <img src={require("./instagram.png")}/>
                <img src={require("./youtube.png")}/>
                <br/><br/>
               
            </div>
        </div>   
     );
}
 
export default Rodape;