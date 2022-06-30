import React from "react";
import Rodape from "../Modulos/Rodape";
import Whats from "../Modulos/Whats";
import VerificaMenu from "../Modulos/VerificaMenu";


const Assinatura = () => {
    const id = localStorage.getItem("id")
    require('../Styles/Assinatura.css')
    return ( 
        <div>
            <VerificaMenu/>
            <Whats/>
            <div className="corpoAssinatura">
               
                <div className="meio">
                    <div className="meio-caixa1">
                        <div>
                            <br/>
                            
                            <h2 className="">Plano Básico</h2>
                            <img className="imgCG" src="https://i.imgur.com/FTvSmIL.png"/>
                        </div>

                       
                    </div>

                    <div className="meio-caixa2">
                        <div>
                            <br/>
                            <h2>Plano Padrão</h2>
                            <img className="imgCG" src=" https://i.imgur.com/HmHtmGQ.png"/>
                        </div>
                    </div>

                        <div className="meio-caixa3">
                            <div>
                                <br/>
                                <h2>Plano Premium</h2>
                                <img className="imgCG" src=" https://i.imgur.com/ct3YlXr.png"/>
                            </div>
                        </div>


                    <div className="meio-preco1">
                       
                            <a href="https://www.mercadopago.com.br/"><button>Assine agora</button></a>
                            <p> <b>R$8,90</b>/mês <b>R$89,90</b>/ano </p>
                                <ul className="descricao">
                                    <li>Acesso entre alguns CURSOS</li>
                                    <li>Acesso limitado de BENEFÍCIOS</li>
                                    <li>As aulas contém anúncios de 30seg/por módulo</li> 
                                    <li>Valor diário: R$0,30 centavos</li>
                                </ul>

                    </div>

                    <div className="meio-preco2">
                       
                            <a href="https://www.mercadopago.com.br/"><button>Assine agora</button></a>
                                <p> <b>R$14,90</b>/mês <b>R$149,90</b>/ano </p>
                                <ul className="descricao">
                                    <li>Acesso a todos os CURSOS</li>
                                    <li>Acesso a todos os BENEFÍCIOS de assinantes Básico e Padrão</li>
                                    <li>Acesso a sala exclusivo do telegram</li> 
                                    <li>Valor diário: R$0,50 centavos</li>
                                </ul>
                    </div>


                            
                    <div className="meio-preco3">
                            
                            <a href="https://www.mercadopago.com.br/"><button>Assine agora</button></a>
                                <p> <b>R$29,90</b>/mês <b>R$299,90</b>/ano </p>
                                    <ul className="descricao">
                                        <li>Acesso a todos os CURSOS</li>
                                        <li>Acesso a todos os beneficios, incluindo mentorias e eventos</li>
                                        <li>Acesso a sala exclusivo no WhatsApp</li> 
                                        <li>Valor diário: R$0,99 centavos</li>
                                    </ul>
                            </div>

                </div>

                
                

            </div>
            <Rodape/>
        </div>
     );
}
 
export default Assinatura;