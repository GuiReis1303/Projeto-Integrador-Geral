import React from "react";
import MenuAL from "../Modulos/MenuAL"
import { Navbar } from "react-bootstrap";
import Rodape from "../Modulos/Rodape";
import Whats from "../Modulos/Whats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import MenuALogin from "../Modulos/MenuALogin"

const Faq = () => {
    const id = localStorage.getItem("id")
    require('../Styles/Faq.css')
    return ( 
        <div>
            {id == null ? <MenuALogin/> : <MenuAL/>}

            <MenuAL/>
            <Whats/>

            <div className="corpoAssinaturaFAQ">
                <div className="meiofaq">
                    <div className="meiofaq-plano">
                        <div>
                            <h4> Dúvidas Frequentes</h4>
                            <p>
                                <strong>
                                    <FontAwesomeIcon icon={faThumbTack}/> Como posso Assistir as Aulas?
                                </strong><br/>
                                Caso já tenha uma conta, basta clicar em "Cursos" e depois escolher qual curso você
                                <br/>você deseja fazer. Logo depois irá abrir o "hub" do curso escolhido, então 
                                selecione o <br/>modulo que deseja fazer e irá aparecer a aula. 
                                Não esqueça de curtir.
                            </p><br/><br/>

                            <p>
                                <strong>
                                    <FontAwesomeIcon icon={faThumbTack}/> Todos podem usar a Comunidade?
                                </strong><br/>
                                Sim, a comunidade foi feita para que os alunos interajam entre si, comentando se <br/>
                                estão ou não gostando do curso ou tirando dúvidas
                            </p><br/><br/>

                            <p>
                                <strong>
                                    <FontAwesomeIcon icon={faThumbTack}/> Minha Assinatura terminou e Agora?
                                </strong><br/>
                                Isso irá depender do plano escolhido. Os planos Básico e Padrão só disponibilizam o <br/>
                                acesso as aulas enquanto o prazo da assinatura for válido. O Plano Premium permite Assistir
                                <br/> aos cursos ja inscritos mesmo após o vencimento da assinatura.
                            </p><br/><br/>
                        </div>
                    </div>

                    <div className="meiofaq-contato">
                        <div>
                            .
                        </div>
                    </div>

                    <div className="meiofaq-gerais">
                        <div>
                            .
                        </div> 
                    </div>
                    
                </div>
            </div>

            <Rodape/>
        </div>
     );
}

 
export default Faq;