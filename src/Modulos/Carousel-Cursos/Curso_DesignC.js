import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faClapperboard, faDownload, faMobileAndroid, faNewspaper, faCamera, faFileVideo, faPenToSquare   } from "@fortawesome/free-solid-svg-icons";
import { faCss3, faHtml5, faJs, faReact, } from "@fortawesome/free-brands-svg-icons";

const Curso_DesignC = () => {
    require('./CarouselCursos.css');
    return ( 
        <div>
            <div className="design">
                <Carousel variant="dark" interval={null} className="carousel-tamanho">
                    <Carousel.Item className="itemcarousel">
                        <div className="caixa">
                            <div className="caixaimagem">
                                <img
                                className="carouselImagem"
                                src={require("./Imagens/designCarousel.png")}
                                alt="Slide Inicial"
                                />
                                <div className="caixa-botao-vermais">
                                    <h6>Design</h6>
                                </div>
                            </div>
                            <div className="caixatexto">
                                <h3>Curso de Design</h3>
                                <p> Aqui você aprenderá Photoshop, Adobe After Effects, Adobe Premiere Pro e os conceitos para se integrar no mercado do Design.
                                </p>
                                <p1>Paulo de Souza C. Neto</p1>
                                
                                <p2><FontAwesomeIcon icon={faCamera} className="iconCursos"/>Curso de Photoshop Completo</p2>
                                <p2><FontAwesomeIcon icon={faFileVideo} className="iconCursos"/> Curso de Premiere - Completo</p2>
                                <p2><FontAwesomeIcon icon={faPenToSquare} className="iconCursos"/> Curso de After Effects - Completo </p2>
                               
                                <p2><FontAwesomeIcon icon={faCertificate} className="iconCursos"/>Certificado de conclusão </p2>       
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="itemcarousel">
                        <div className="caixa">
                            <div className="caixaimagem">
                                <img
                                className="carouselImagem"
                                src={require("./Imagens/design.png")}
                                alt="Primeiro slide"
                                />
                                <div className="caixa-botao-vermais">
                                    <button className="botao-ver-mais">Ver mais</button>
                                </div>
                            </div>
                            <div className="caixatexto">
                                <h3>Photoshop Completo</h3>
                                <p>Aprenda a recortar imagens, utilizar paletas de cores e criação de logos profissionais.</p>
                                <p1> Paulo Neto </p1>
                                
                                <p2><FontAwesomeIcon icon={faClapperboard} className="iconCursos"/>38 horas de vídeo sob demanda</p2>
                                <p2><FontAwesomeIcon icon={faNewspaper} className="iconCursos"/> 26 artigos</p2>
                                <p2><FontAwesomeIcon icon={faDownload} className="iconCursos"/>48 recursos para download </p2>
                                <p2><FontAwesomeIcon icon={faMobileAndroid} className="iconCursos"/>Acesso no dispositivo móvel</p2>
                                <p2><FontAwesomeIcon icon={faCertificate} className="iconCursos"/>Certificado de conclusão </p2>
                                <button>Ver mais</button>                            
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="itemcarousel">
                        <div className="caixa">
                            <div className="caixaimagem">
                                <img
                                className="carouselImagem"
                                src={require("./Imagens/designpr.png")}
                                alt="Segundo slide"
                                />
                                <div className="caixa-botao-vermais">
                                    <button className="botao-ver-mais">Ver mais</button>
                                </div>
                            </div>
                            <div className="caixatexto">
                                <h3>Premiere Pro Completo</h3>
                                <p>Aprenda no Adobe Premiere Pro a editar vídeos e introduções de forma profissional.</p>
                                <p1> Paulo Neto </p1>
                                
                                <p2><FontAwesomeIcon icon={faClapperboard} className="iconCursos"/>27 horas de vídeo sob demanda</p2>
                                <p2><FontAwesomeIcon icon={faNewspaper} className="iconCursos"/> 20 artigos</p2>
                                <p2><FontAwesomeIcon icon={faDownload} className="iconCursos"/>17 recursos para download </p2>
                                <p2><FontAwesomeIcon icon={faMobileAndroid} className="iconCursos"/>Acesso no dispositivo móvel</p2>
                                <p2><FontAwesomeIcon icon={faCertificate} className="iconCursos"/>Certificado de conclusão </p2>
                                <button>Ver mais</button>                            
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="itemcarousel">
                        <div className="caixa">
                            <div className="caixaimagem">
                                <img
                                className="carouselImagem"
                                src={require("./Imagens/designae.png")}
                                alt="Terceiro slide"
                                />
                                <div className="caixa-botao-vermais">
                                    <button className="botao-ver-mais">Ver mais</button>
                                </div>
                            </div>
                            <div className="caixatexto">
                                <h3>After Effects Completo</h3>
                                <p>Aprenda do zero Adobe After Effects de forma didática passo a passo!</p>
                                <p1> Paulo Neto </p1>
                                
                                <p2><FontAwesomeIcon icon={faClapperboard} className="iconCursos"/>25 horas de vídeo sob demanda</p2>
                                <p2><FontAwesomeIcon icon={faNewspaper} className="iconCursos"/> 15 artigos</p2>
                                <p2><FontAwesomeIcon icon={faDownload} className="iconCursos"/>31 recursos para download </p2>
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
 
export default Curso_DesignC;