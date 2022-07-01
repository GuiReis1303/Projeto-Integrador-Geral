import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faClapperboard, faDownload, faMobileAndroid, faNewspaper,  } from "@fortawesome/free-solid-svg-icons";
import { faCss3, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

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
                                <div className="botaocursos-celular">
                                    <h6>Finanças</h6>
                                </div>
                            </div>
                            <div className="caixatextocursos">
                                <h3>Matemática Financeira Básica</h3>
                                <p> Nesse curso iremos ajudar como se organizar financeiramente para melhorar sua vida Financeira </p>
                                <p1>Marcos Paulo Marçal</p1>
                                
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
                                <div className="botaocursos-celular">
                                    <Link to={'/Curso_Financas'}><button id="bhtmlcolor" className="botao-ver-mais">Ver mais</button></Link>  
                                </div>
                            </div>
                            <div className="caixatextocursos">
                                <h3>Começando a Investir</h3>
                                <p>Nesse curso iremos mostrar com funciona os primeiros investimento para a sua carteira ser diversificada.
                                </p>
                                <p1>Marcos Paulo Marçal</p1>
                                
                                <p2><FontAwesomeIcon icon={faClapperboard} className="iconCursos"/>38 horas de vídeo sob demanda</p2>
                                <p2><FontAwesomeIcon icon={faNewspaper} className="iconCursos"/> 23 artigos</p2>
                                <p2><FontAwesomeIcon icon={faDownload} className="iconCursos"/>43 recursos para download </p2>
                                <p2><FontAwesomeIcon icon={faMobileAndroid} className="iconCursos"/>Acesso no dispositivo móvel</p2>
                                <p2><FontAwesomeIcon icon={faCertificate} className="iconCursos"/>Certificado de conclusão </p2>
                                <Link to={'/Curso_Financas'}><button id="bhtmlcolor" >Ver mais</button></Link>                            
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
                                <div className="botaocursos-celular">
                                    <button id="bcsscolor" className="botao-ver-mais">Em breve</button>
                                </div>
                            </div>
                            <div className="caixatextocursos">
                                <h3>Marcos Paulo Marçal</h3>
                                <p>Nesse curso irei abrir meu Home Broker para mostrar na pratica com funciona as ferramenta de investimento.</p>
                                <p1>Gulherme Reis, Marcos Paulo e Paulo Neto </p1>
                                
                                <p2><FontAwesomeIcon icon={faClapperboard} className="iconCursos"/>38 horas de vídeo sob demanda</p2>
                                <p2><FontAwesomeIcon icon={faNewspaper} className="iconCursos"/> 23 artigos</p2>
                                <p2><FontAwesomeIcon icon={faDownload} className="iconCursos"/>43 recursos para download </p2>
                                <p2><FontAwesomeIcon icon={faMobileAndroid} className="iconCursos"/>Acesso no dispositivo móvel</p2>
                                <p2><FontAwesomeIcon icon={faCertificate} className="iconCursos"/>Certificado de conclusão </p2>
                                <button id="bcsscolor" >Em breve</button>                            
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
                                <div className="botaocursos-celular">
                                    <button id="bjavascriptcolor" className="botao-ver-mais">Em breve</button>
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
                                <button id="bjavascriptcolor" >Em breve</button>                            
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
     );
}
 
export default Curso_FinancasC;