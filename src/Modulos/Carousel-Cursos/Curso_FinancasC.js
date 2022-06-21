import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faClapperboard, faDownload, faMobileAndroid, faNewspaper,  } from "@fortawesome/free-solid-svg-icons";
import { faCss3, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";

const Curso_FinancasC = () => {
    require('./CarouselCursos.css');
    return ( 
        <div>
            <div className="financas">
                <Carousel variant="dark" interval={null} className="carousel-tamanho">
                    <Carousel.Item className="itemcarouselcursos">
                        <div className="caixacursos">
                            <div className="caixacursos-imagem">
                                <img
                                className="caixacursos-carouselImagem"
                                src={require("./Imagens/financas.png")}
                                alt="Slide Inicial"
                                />
                                <div className="caixa-botao-vermais">
                                    <h6>Finanças</h6>
                                </div>
                            </div>
                            <div className="caixatextocursos">
                                <h3>Linguagens de Programação</h3>
                                <p>Venha aprender programação conosco, ensinamos desde linguagens front-end até back-end.
                                    Venha aprender a fazer um site do zero com HTML e CSS e fazer ele funcional com JS.
                                </p>
                                <p1>Guilherme F. dos Reis </p1>
                                
                                <p2><FontAwesomeIcon icon={faHtml5} className="iconCursos"/>Curso de HTML Completo</p2>
                                <p2><FontAwesomeIcon icon={faCss3} className="iconCursos"/> Curso de CSS - Completo</p2>
                                <p2><FontAwesomeIcon icon={faJs} className="iconCursos"/> Curso de JavaScript - Completo </p2>
                                <p2><FontAwesomeIcon icon={faReact} className="iconCursos"/> Curso de React - Iniciante</p2>
                                <p2><FontAwesomeIcon icon={faCertificate} className="iconCursos"/>Certificado de conclusão </p2>        
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="itemcarouselcursos">
                        <div className="caixacursos">
                            <div className="caixacursos-imagem">
                                <img
                                className="caixacursos-carouselImagem"
                                src={require("./Imagens/html.png")}
                                alt="Primeiro slide"
                                />
                                <div className="caixa-botao-vermais">
                                    <button className="botao-ver-mais">Ver mais</button>
                                </div>
                            </div>
                            <div className="caixatextocursos">
                                <h3>HTML Completo</h3>
                                <p>Curso mais didático e completo de HTML, aprendendo desde o básico até como usar div's</p>
                                <p1>Gulherme Reis, Marcos Paulo e Paulo Neto </p1>
                                
                                <p2><FontAwesomeIcon icon={faClapperboard} className="iconCursos"/>38 horas de vídeo sob demanda</p2>
                                <p2><FontAwesomeIcon icon={faNewspaper} className="iconCursos"/> 23 artigos</p2>
                                <p2><FontAwesomeIcon icon={faDownload} className="iconCursos"/>43 recursos para download </p2>
                                <p2><FontAwesomeIcon icon={faMobileAndroid} className="iconCursos"/>Acesso no dispositivo móvel</p2>
                                <p2><FontAwesomeIcon icon={faCertificate} className="iconCursos"/>Certificado de conclusão </p2>
                                <button>Ver mais</button>                            
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="itemcarouselcursos">
                        <div className="caixacursos">
                            <div className="caixacursos-imagem">
                                <img
                                className="caixacursos-carouselImagem"
                                src={require("./Imagens/css.png")}
                                alt="Segundo slide"
                                />
                                <div className="caixa-botao-vermais">
                                    <button className="botao-ver-mais">Ver mais</button>
                                </div>
                            </div>
                            <div className="caixatextocursos">
                                <h3>CSS Completo</h3>
                                <p>Curso mais didático e completo de CSS, aprendendo como estilizar todas as tags</p>
                                <p1>Gulherme Reis, Marcos Paulo e Paulo Neto </p1>
                                
                                <p2><FontAwesomeIcon icon={faClapperboard} className="iconCursos"/>38 horas de vídeo sob demanda</p2>
                                <p2><FontAwesomeIcon icon={faNewspaper} className="iconCursos"/> 23 artigos</p2>
                                <p2><FontAwesomeIcon icon={faDownload} className="iconCursos"/>43 recursos para download </p2>
                                <p2><FontAwesomeIcon icon={faMobileAndroid} className="iconCursos"/>Acesso no dispositivo móvel</p2>
                                <p2><FontAwesomeIcon icon={faCertificate} className="iconCursos"/>Certificado de conclusão </p2>
                                <button>Ver mais</button>                            
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="itemcarouselcursos">
                        <div className="caixacursos">
                            <div className="caixacursos-imagem">
                                <img
                                className="caixacursos-carouselImagem"
                                src={require("./Imagens/js.png")}
                                alt="Terceiro slide"
                                />
                                <div className="caixa-botao-vermais">
                                    <button className="botao-ver-mais">Ver mais</button>
                                </div>
                            </div>
                            <div className="caixatextocursos">
                                <h3>JavaScript Completo</h3>
                                <p>Curso mais didático e completo de JS, desde declaração de váriaveis, até ligação com banco de dados</p>
                                <p1>Gulherme Reis, Marcos Paulo e Paulo Neto </p1>
                                
                                <p2><FontAwesomeIcon icon={faClapperboard} className="iconCursos"/>38 horas de vídeo sob demanda</p2>
                                <p2><FontAwesomeIcon icon={faNewspaper} className="iconCursos"/> 23 artigos</p2>
                                <p2><FontAwesomeIcon icon={faDownload} className="iconCursos"/>43 recursos para download </p2>
                                <p2><FontAwesomeIcon icon={faMobileAndroid} className="iconCursos"/>Acesso no dispositivo móvel</p2>
                                <p2><FontAwesomeIcon icon={faCertificate} className="iconCursos"/>Certificado de conclusão </p2>
                                <button>Ver mais</button>                            
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
     );
}
 
export default Curso_FinancasC;