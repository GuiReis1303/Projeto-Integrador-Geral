import React from "react";
import MenuAL from "../Modulos/MenuAL";
import Carousel from 'react-bootstrap/Carousel'
import Rodape from "../Modulos/Rodape";
import Whats from "../Modulos/Whats";

const Home = () => {
    require('../Styles/Home.css')
    return ( 
        <div>
            <MenuAL/>
            <Whats/>    
                <div className="inicio">
                    <div>
                        <p className="inicio-p">
                            <h2>
                            Bem-vindo à Station Class uma plataforma 
                            criada para te ajudar a mudar sua vida, 
                            transformando horas perdidas em aula 
                            com conteúdo exclusivo e bem atual.
                            </h2>
                          
                   
                            <h2>
                            Criamos essa plataforma com o objetivo 
                            de mudar vidas, trazendo conhecimento e 
                            aprendizado para todas as pessoas, 
                            de todos os gêneros, classes e etnias.
                            </h2>
                <div className="inicio-botao">
                            <button>Conheça nossos Cursos!</button>
                            <button>Conheça nossos Cursos!</button>
                </div>
                        </p>  
                    
                </div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 "
                        src="https://i.imgur.com/IDmIhUe.png"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://wallpapercave.com/wp/wp3631558.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://cdn.wallpapersafari.com/80/63/hX2FYe.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
         <Rodape/>   
        </div>
     );
}
 
export default Home;