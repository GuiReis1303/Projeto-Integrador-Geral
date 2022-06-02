import React from "react";
import Rodape from "../Modulos/Rodape";
const Assinatura = () => {
    require('./Assinatura.css')
    return ( 
        <div>
            <div className="corpo">
                <div className="imagemLateral">
                    
                </div>

                <div className="meio">
                    <div className="caixa1">
                        <div>
                            <h2>Plano Prata</h2>
                            <img className="imgC" src="https://i.imgur.com/NIxXpcL.png"/>
                        </div>

                       
                    </div>

                    <div className="caixa2">
                        <div>
                            <h2>Plano Gold</h2>
                            <img className="imgC" src=" https://i.imgur.com/pzop9Yh.png"/>
                        </div>

                      
                    </div>



                    <div className="preco1">
                        <div>
                            <button>Compre agora</button>
                            <p> A partir de <b>R$29,99</b>/mês </p>
                                <ul>
                                    <li>60 Aulas</li>
                                    <li>11 Cursos disponíveis</li> 
                                </ul>
                        </div>

                    </div>

                    <div className="preco2">
                        <div>
                            <button>Compre agora</button>
                              <p> A partir de <b>R$59,99</b>/mês </p>
                                <ul>
                                    <li>150 Aulas</li>
                                    <li>33 Cursos disponíveis</li> 
                                    <li>Certificado</li>
                                </ul>
                        </div>

                    </div>

                </div>

            </div>
            <Rodape/>
        </div>
     );
}
 
export default Assinatura;