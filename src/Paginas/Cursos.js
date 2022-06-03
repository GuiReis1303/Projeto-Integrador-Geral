import React from "react";
import Menu from "../Modulos/Menu";
import Carousel from 'react-bootstrap/Carousel'

const Cursos = () => {
    require('./Cursos.css')
    return ( 
        <div>
            <Menu/>
            <div className="programacao">
                <h2>Cursos de Linguagens de Programação</h2>
                <Carousel fade variant="dark">
                    <Carousel.Item className="itemcarousel">
                        <div className="caixa">
                            <div className="caixaimagem">
                                <img
                                src="https://freedesignfile.com/upload/2015/01/Diamond-geometric-shapes-background-vector-01.jpg"
                                alt="First slide"
                                />
                            </div>
                            <div className="caixatexto">
                                <h1> Nome Curso</h1>
                                <p> Descrição do Curso</p>
                                <button>Ver mais</button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="itemcarousel">
                        <div className="caixa">
                            <div className="caixaimagem">
                                <img
                                src="https://freedesignfile.com/upload/2015/01/Diamond-geometric-shapes-background-vector-01.jpg"
                                alt="First slide"
                                />
                            </div>
                            <div className="caixatexto">
                                <h1> Teste02</h1>
                                <p> Descrição do Curso</p>
                                <button>Ver mais</button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="itemcarousel">
                        <div className="caixa">
                            <div className="caixaimagem">
                                <img
                                src="https://freedesignfile.com/upload/2015/01/Diamond-geometric-shapes-background-vector-01.jpg"
                                alt="First slide"
                                />
                            </div>
                            <div className="caixatexto">
                                <h1> Teste03</h1>
                                <p> Descrição do Curso</p>
                                <button>Ver mais</button>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            
            
        </div>
     );
}
 
export default Cursos;