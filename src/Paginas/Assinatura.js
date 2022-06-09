import React from "react";
import MenuAL from "../Modulos/MenuAL";
import Rodape from "../Modulos/Rodape";



const Assinatura = () => {
    require('./Assinatura.css')
    return ( 
        <div>
            <MenuAL/>
            <div className="corpoAssinatura">
               
                <div className="meio">
                    <div className="caixa1">
                        <div>
                            <br/>
                            
                            <h2 className="">Plano Básico</h2>
                            <img className="imgCP" src="https://i.imgur.com/NIxXpcL.png"/>
                        </div>

                       
                    </div>

                    <div className="caixa2">
                        <div>
                            <br/>
                            <h2>Plano Avançado</h2>
                            <img className="imgCG" src=" https://i.imgur.com/pzop9Yh.png"/>
                        </div>
                    </div>

                        <div className="caixa3">
                            <div>
                                <br/>
                                <h2>Plano Premium</h2>
                                <img className="imgCG" src=" https://i.imgur.com/pzop9Yh.png"/>
                            </div>
                        </div>


                    <div className="preco1">
                       
                            <button>Compre agora</button>
                            <p> A partir de <b>R$29,99</b>/mês </p>
                                <ul>
                                    <li>60 Aulas</li>
                                    <li>11 Cursos disponíveis</li> 
                                </ul>

                    </div>

                    <div className="preco2">
                       
                            <button>Compre agora</button>
                              <p> A partir de <b>R$59,99</b>/mês </p>
                                <ul>
                                    <li>150 Aulas</li>
                                    <li>33 Cursos disponíveis</li> 
                                    <li>Certificado</li>
                                </ul>
                    </div>


                            
                            <div className="preco3">
                            
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
            <Rodape/>
        </div>
     );
}
 
export default Assinatura;