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
                            <h2>Plano Padrão</h2>
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
                       
                            <button>Assine agora</button>
                            <p> <b>R$8,90</b>/mês <b>R$89,90</b>/ano </p>
                                <ul className="descricao">
                                    <li>Acesso a todos os CURSOS*</li>
                                    <li>Acesso a todos os BENEFÍCIOS** de assinantes basico e padrão</li>
                                    <li>As aulas contém anunicos de 10seg/cada</li> 
                                    <li>Valor por dia 0,30 centavos</li>
                                </ul>

                    </div>

                    <div className="preco2">
                       
                            <button>Assine agora</button>
                                <p> <b>R$14,90</b>/mês <b>R$149,90</b>/ano </p>
                                <ul className="descricao">
                                    <li>Acesso a todos os CURSOS*</li>
                                    <li>Acesso a todos os BENEFÍCIOS** de assinantes basico e padrão</li>
                                    <li>Acesso a sala exclusivo do telegram</li> 
                                    <li>Valor por dia 0,50 centavos</li>
                                </ul>
                    </div>


                            
                    <div className="preco3">
                            
                            <button>Assine agora</button>
                                <p> <b>R$29,90</b>/mês <b>R$299,90</b>/ano </p>
                                    <ul className="descricao">
                                        <li>Acesso a todos os CURSOS*</li>
                                        <li>Acesso a todos os beneficios, incluindo mentorias e eventos</li>
                                        <li>Acesso a sala exclusivo no WhatsApp</li> 
                                        <li>Valor por dia 0,99 centavos</li>
                                    </ul>
                            </div>

                </div>

                
                

            </div>
            <Rodape/>
        </div>
     );
}
 
export default Assinatura;