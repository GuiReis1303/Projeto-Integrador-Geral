import React from "react";
import MenuAL from "../Modulos/MenuAL"
import { Navbar } from "react-bootstrap";
import Rodape from "../Modulos/Rodape";
import Whats from "../Modulos/Whats";

const Faq = () => {
    require('../Styles/Faq.css')
    return ( 
        <div>
            <MenuAL/>
            <Whats/>
            <div className="corpoAssinaturaFAQ">
                <div className="meiofaq">
                    <div className="meiofaq-plano">
                        <div>
                            <br/>
                            <br/>
                            
                            <h2 className="">Funcionamento do Planos</h2>
                            <br/>
                          
                           <b> Os valores são mensais ou anuais? </b>
                           
                            <p> R: Os valores do site são mensais. O valor muda conforme o plano que você selecionar. </p>
                            <br/>
                            
                            
                            <b> Uma vez assinado posso ter acesso para sempre? </b>
                           
                            <p> R: Não. O acesso é apenas garantido com o plano em vigor. </p>
                        </div>

                       
                    </div>

                    <div className="meiofaq-contato">
                        <div>
                            <br/>
                            <h2>Plano Gold</h2>
                           
                        </div>

                      
                    </div>

                   

                 

                    <div className="meiofaq-gerais">
                <h2> oi </h2>
                        
                    </div>
                    
                </div>

                
                

            </div>
            <Rodape/>
        </div>
     );
}

 
export default Faq;