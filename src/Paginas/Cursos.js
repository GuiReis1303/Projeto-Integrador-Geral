import React from "react";
import Menu from "../Modulos/Menu";
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faClapperboard, faDownload, faMobileAndroid, faNewspaper, } from "@fortawesome/free-solid-svg-icons";
import Rodape from "../Modulos/Rodape";


const Cursos = () => {
    require('./Cursos.css')
    return ( 
        <div>
            <Menu/>
            <div className="programacao">
                <Carousel variant="dark">
                    <Carousel.Item className="itemcarousel">
                        <div className="caixa">
                            <div className="caixaimagem">
                                <img
                                className="carouselImagem"
                                src={require("./Imagens/html.png")}
                                alt="First slide"
                                />
                            </div>
                            <div className="caixatexto">
                                <h3>HTML Completo</h3>
                                <p>Curso mais didático e completo de HTML, aprendendo desde o básico até como usar div's</p>
                                <p1>Gulherme Reis, Marcos Paulo e Paulo Neto </p1> <br/>
                                <button>Ver mais</button> <br/>
                                
                                <p2><FontAwesomeIcon icon={faClapperboard} className="iconCursos"/>38 horas de vídeo sob demanda</p2>
                                <p2><FontAwesomeIcon icon={faNewspaper} className="iconCursos"/> 23 artigos</p2>
                                <p2><FontAwesomeIcon icon={faDownload} className="iconCursos"/>43 recursos para download </p2>
                                <p2><FontAwesomeIcon icon={faMobileAndroid} className="iconCursos"/>Acesso no dispositivo móvel</p2>
                                <p2><FontAwesomeIcon icon={faCertificate} className="iconCursos"/>Certificado de conclusão </p2>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="itemcarousel">
                        <div className="caixa">
                            <div className="caixaimagem">
                                <img
                                className="carouselImagem"
                                src={require("./Imagens/css.png")}
                                alt="First slide"
                                />
                            </div>
                            <div className="caixatexto">
                                <h3>CSS Completo</h3>
                                <p>Curso mais didático e completo de CSS, aprendendo como estilizar todas as tags</p>
                                <p1>Gulherme Reis, Marcos Paulo e Paulo Neto </p1> <br/>
                                <button>Ver mais</button> <br/>
                                
                                <p2><FontAwesomeIcon icon={faClapperboard} className="iconCursos"/>38 horas de vídeo sob demanda</p2>
                                <p2><FontAwesomeIcon icon={faNewspaper} className="iconCursos"/> 23 artigos</p2>
                                <p2><FontAwesomeIcon icon={faDownload} className="iconCursos"/>43 recursos para download </p2>
                                <p2><FontAwesomeIcon icon={faMobileAndroid} className="iconCursos"/>Acesso no dispositivo móvel</p2>
                                <p2><FontAwesomeIcon icon={faCertificate} className="iconCursos"/>Certificado de conclusão </p2>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="itemcarousel">
                        <div className="caixa">
                            <div className="caixaimagem">
                                <img
                                className="carouselImagem"
                                src={require("./Imagens/js.png")}
                                alt="First slide"
                                />
                            </div>
                            <div className="caixatexto">
                                <h3>JavaScript Completo</h3>
                                <p>Curso mais didático e completo de JS, desde declaração de váriaveis, até ligação com banco de dados</p>
                                <p1>Gulherme Reis, Marcos Paulo e Paulo Neto </p1> <br/>
                                <button>Ver mais</button> <br/>
                                
                                <p2><FontAwesomeIcon icon={faClapperboard} className="iconCursos"/>38 horas de vídeo sob demanda</p2>
                                <p2><FontAwesomeIcon icon={faNewspaper} className="iconCursos"/> 23 artigos</p2>
                                <p2><FontAwesomeIcon icon={faDownload} className="iconCursos"/>43 recursos para download </p2>
                                <p2><FontAwesomeIcon icon={faMobileAndroid} className="iconCursos"/>Acesso no dispositivo móvel</p2>
                                <p2><FontAwesomeIcon icon={faCertificate} className="iconCursos"/>Certificado de conclusão </p2>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
                <div className="bodyCursos">
                    <div className="containerCursos">
                       
                            <h2>Cursos mais Assistidos</h2> 
                        <div className="AlinharCursosDescricao">
                            <div class="cardMaisAssistidos">
                            <img className="imagemCursosMaisAssistidos" src="https://i.imgur.com/qJrMdbS.png" alt="Avatar" />
                                    <div class="containerMaisAssistidos">
                                        <h5><b>Curso Completo de Linguagem C e C++ - Iniciante Ao Avançado</b></h5> 
                                        <p>Paulo Neto</p> 
                                        <h2>Plano Gold</h2> <br/>
                                    </div>
                            </div>

                                    <div class="cardMaisAssistidos">
                                    <img className="imagemCursosMaisAssistidos" src="https://i.imgur.com/qfzujyG.png" alt="Avatar" />
                                            <div class="containerMaisAssistidos">
                                                <h5><b>Java 2022 COMPLETO: Do Zero ao Profissional + Projetos!</b></h5> 
                                                <p>Paulo Neto</p> 
                                                <h2>Plano Gold</h2> <br/>
                                            </div>
                                    </div>

                                                <div class="cardMaisAssistidos">
                                            <img className="imagemCursosMaisAssistidos" src="https://i.imgur.com/qJrMdbS.png" alt="Avatar" />
                                                    <div class="containerMaisAssistidos">
                                                        <h5><b>Curso Completo de Linguagem C e C++ - Iniciante Ao Avançado</b></h5> 
                                                        <p>Paulo Neto</p> 
                                                        <h2>Plano Gold</h2> <br/>
                                                    </div>
                                            </div>

                                            <div class="cardMaisAssistidos">
                                                     <img className="imagemCursosMaisAssistidos" src="https://i.imgur.com/qJrMdbS.png" alt="Avatar" />
                                                       <div class="containerMaisAssistidos">
                                                            <h5><b>Curso Completo de Linguagem C e C++ - Iniciante Ao Avançado</b></h5> 
                                                            <p>Paulo Neto</p> 
                                                            <h2>Plano Gold</h2> <br/>
                                                       </div>
                                          </div>

                                              
                                                <br/><br/>  <br/><br/>
                                
                        </div>   

                        <div className="AlinharCursosDescricao">
                            <div class="cardMaisAssistidos">
                            <img className="imagemCursosMaisAssistidos" src="https://i.imgur.com/qJrMdbS.png" alt="Avatar" />
                                    <div class="containerMaisAssistidos">
                                        <h5><b>Curso Completo de Linguagem C e C++ - Iniciante Ao Avançado</b></h5> 
                                        <p>Paulo Neto</p> 
                                        <h2>Plano Gold</h2> <br/>
                                    </div>
                            </div>

                                    <div class="cardMaisAssistidos">
                                    <img className="imagemCursosMaisAssistidos" src="https://i.imgur.com/qJrMdbS.png" alt="Avatar" />
                                            <div class="containerMaisAssistidos">
                                                <h5><b>Curso Completo de Linguagem C e C++ - Iniciante Ao Avançado</b></h5> 
                                                <p>Paulo Neto</p> 
                                                <h2>Plano Gold</h2> <br/>
                                            </div>
                                    </div>

                                                <div class="cardMaisAssistidos">
                                            <img className="imagemCursosMaisAssistidos" src="https://i.imgur.com/qJrMdbS.png" alt="Avatar" />
                                                    <div class="containerMaisAssistidos">
                                                        <h5><b>Curso Completo de Linguagem C e C++ - Iniciante Ao Avançado</b></h5> 
                                                        <p>Paulo Neto</p> 
                                                        <h2>Plano Gold</h2> <br/>
                                                    </div>
                                            </div>

                                            <div class="cardMaisAssistidos">
                                                     <img className="imagemCursosMaisAssistidos" src="https://i.imgur.com/qJrMdbS.png" alt="Avatar" />
                                                       <div class="containerMaisAssistidos">
                                                            <h5><b>Curso Completo de Linguagem C e C++ - Iniciante Ao Avançado</b></h5> 
                                                            <p>Paulo Neto</p> 
                                                            <h2>Plano Gold</h2> <br/>
                                                       </div>
                                          </div>
                                
                        </div>  
                    </div>
            </div>
    <Rodape/>            
        </div>

        
     );
}
 
export default Cursos;