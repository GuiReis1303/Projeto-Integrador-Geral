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
                <Carousel variant="dark">
                    <Carousel.Item className="itemcarousel">
                        <div className="caixa">
                            <div className="caixaimagem">
                                <img
                                src="https://freedesignfile.com/upload/2015/01/Diamond-geometric-shapes-background-vector-01.jpg"
                                alt="First slide"
                                />
                            </div>
                            <div className="caixatexto">
                                <h1>Desenvolvimento Web Completo 2022 - 20 cursos + 20 projetos</h1>
                                <p>Domine Web - 20 Cursos - HTML5, CSS3, SASS, Bootstrap, JS, ES6, PHP 7, OO, MySQL, JQuery, MVC, APIs, IONIC e muito mais.</p>
                                <p1>Marcos Paulo </p1> <br/>
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
                                <h1>Curso de Photoshop Completo - Do Básico ao Avançado</h1>
                                <p>Aprenda a editar imagens na prática realizando diversos trabalhos e exercícios</p>
                                <p1>Paulo Neto</p1> <br/>
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
                                <h1>C# COMPLETO Programação Orientada a Objetos + Projetos </h1>
                                <p>Curso mais didático e completo de C# e OO, coleções, UML, ASP.NET, Entity Framework, LINQ, Lambda e muito mais</p>
                                <p1>Gulherme Reis, Marcos Paulo e Paulo Neto </p1> <br/>
                                <button>Ver mais</button> <br/>
                                <p2>38 horas de vídeo sob demanda</p2>
                                <p2>23 artigos</p2>
                                <p2>43 recursos para download </p2>
                                <p2>Acesso total vitalício </p2>
                                <p2>Acesso no dispositivo móvel e na TV </p2>
                                <p2>Certificado de conclusão </p2>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            
        </div>
     );
}
 
export default Cursos;