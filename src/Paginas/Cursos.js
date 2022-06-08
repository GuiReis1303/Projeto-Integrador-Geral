import React from "react";
import MenuAL from "../Modulos/MenuAL";
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faClapperboard, faDownload, faMobileAndroid, faNewspaper,  } from "@fortawesome/free-solid-svg-icons";
import Rodape from "../Modulos/Rodape";
import { faCss3, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";


const Cursos = () => {
    require('./Cursos.css')
    return ( 
        <div className="geral-curso">
            <MenuAL/>
            <div className="programacao">
                <Carousel variant="dark" interval={null}>
                    <Carousel.Item className="itemcarousel">
                        <div className="caixa">
                            <div className="caixaimagem">
                                <img
                                className="carouselImagem"
                                src={require("./Imagens/linguagens.png")}
                                alt="Slide Inicial"
                                />
                            </div>
                            <div className="caixatexto">
                                <h3>Linguagens de Programação</h3>
                                <p>Venha aprender programação conosco, ensinamos desde linguagens front-end até back-end.
                                    Venha aprender a fazer um site do zero com HTML e CSS e fazer ele funcional com JS.
                                </p>
                                <p1>Guilherme F. dos Reis </p1> <br/>
                                <button>Ver mais</button> <br/>
                                
                                <p2><FontAwesomeIcon icon={faHtml5} className="iconCursos"/>Curso de HTML Completo</p2>
                                <p2><FontAwesomeIcon icon={faCss3} className="iconCursos"/> Curso de CSS - Completo</p2>
                                <p2><FontAwesomeIcon icon={faJs} className="iconCursos"/> Curso de JavaScript - Completo </p2>
                                <p2><FontAwesomeIcon icon={faReact} className="iconCursos"/> Curso de React - Iniciante</p2>
                                <p2><FontAwesomeIcon icon={faCertificate} className="iconCursos"/>Certificado de conclusão </p2>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="itemcarousel">
                        <div className="caixa">
                            <div className="caixaimagem">
                                <img
                                className="carouselImagem"
                                src={require("./Imagens/html.png")}
                                alt="Primeiro slide"
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
                                alt="Segundo slide"
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
                                alt="Terceiro slide"
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


            <div className="financas">
                <Carousel variant="dark" interval={null}>
                    <Carousel.Item className="itemcarousel">
                        <div className="caixa">
                            <div className="caixaimagem">
                                <img
                                className="carouselImagem"
                                src={require("./Imagens/financas.png")}
                                alt="Slide Inicial"
                                />
                            </div>
                            <div className="caixatexto">
                                <h3>Linguagens de Programação</h3>
                                <p>Venha aprender programação conosco, ensinamos desde linguagens front-end até back-end.
                                    Venha aprender a fazer um site do zero com HTML e CSS e fazer ele funcional com JS.
                                </p>
                                <p1>Guilherme F. dos Reis </p1> <br/>
                                <button>Ver mais</button> <br/>
                                
                                <p2><FontAwesomeIcon icon={faHtml5} className="iconCursos"/>Curso de HTML Completo</p2>
                                <p2><FontAwesomeIcon icon={faCss3} className="iconCursos"/> Curso de CSS - Completo</p2>
                                <p2><FontAwesomeIcon icon={faJs} className="iconCursos"/> Curso de JavaScript - Completo </p2>
                                <p2><FontAwesomeIcon icon={faReact} className="iconCursos"/> Curso de React - Iniciante</p2>
                                <p2><FontAwesomeIcon icon={faCertificate} className="iconCursos"/>Certificado de conclusão </p2>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="itemcarousel">
                        <div className="caixa">
                            <div className="caixaimagem">
                                <img
                                className="carouselImagem"
                                src={require("./Imagens/html.png")}
                                alt="Primeiro slide"
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
                                alt="Segundo slide"
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
                                alt="Terceiro slide"
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

            
            <div className="design">
                <Carousel variant="dark" interval={null}>
                    <Carousel.Item className="itemcarousel">
                        <div className="caixa">
                            <div className="caixaimagem">
                                <img
                                className="carouselImagem"
                                src={require("./Imagens/design.png")}
                                alt="Slide Inicial"
                                />
                            </div>
                            <div className="caixatexto">
                                <h3>Linguagens de Programação</h3>
                                <p>Venha aprender programação conosco, ensinamos desde linguagens front-end até back-end.
                                    Venha aprender a fazer um site do zero com HTML e CSS e fazer ele funcional com JS.
                                </p>
                                <p1>Guilherme F. dos Reis </p1> <br/>
                                <button>Ver mais</button> <br/>
                                
                                <p2><FontAwesomeIcon icon={faHtml5} className="iconCursos"/>Curso de HTML Completo</p2>
                                <p2><FontAwesomeIcon icon={faCss3} className="iconCursos"/> Curso de CSS - Completo</p2>
                                <p2><FontAwesomeIcon icon={faJs} className="iconCursos"/> Curso de JavaScript - Completo </p2>
                                <p2><FontAwesomeIcon icon={faReact} className="iconCursos"/> Curso de React - Iniciante</p2>
                                <p2><FontAwesomeIcon icon={faCertificate} className="iconCursos"/>Certificado de conclusão </p2>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="itemcarousel">
                        <div className="caixa">
                            <div className="caixaimagem">
                                <img
                                className="carouselImagem"
                                src={require("./Imagens/html.png")}
                                alt="Primeiro slide"
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
                                alt="Segundo slide"
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
                                alt="Terceiro slide"
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