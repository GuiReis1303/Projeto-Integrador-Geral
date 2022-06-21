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
            <div className="geral">
           <div className="promocao"><p> Planos com até 35% de desconto! </p></div>
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
                            <button>Confira nossos Planos!</button>
                </div>
                        </p>  
                        </div>
                </div>
                <div className="branco"></div>
                <Carousel fade>
                    <Carousel.Item>
                        <div className="caixaimagem">
                        <img 
                        className="caixaimagem-carousel"
                        src="https://i.imgur.com/IDmIhUe.png"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                        </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="caixaimagem">
                        <img
                       className="caixaimagem-carousel"
                        src="https://i.imgur.com/9FFP5bk.png"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                        </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="caixaimagem">
                        <img
                       className="caixaimagem-carousel"
                        src="https://i.imgur.com/kevxzDz.png"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                        </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    
                </Carousel>
                
           
            <main>
          <div>
            <h2 className="h2principaiscategorias"><b>Principais categorias</b></h2>
            <hr></hr>
          </div>
        <div className="gallery">
         <div className="gallery-card" id="card-01">
           <h2 className="gallery-card-title">Design</h2>
            <a href="" className="gallery-card-btn">Mais cursos</a>
         </div>
         <div className="gallery-card" id="card-02">
           <h2 className="gallery-card-title">Programação</h2>
            <a href="" className="gallery-card-btn">Mais cursos</a>
         </div>
         <div className="gallery-card" id="card-03">
           <h2 className="gallery-card-title">Finanças</h2>
            <a href="" className="gallery-card-btn">Mais cursos</a>
         </div>
         <div className="gallery-card" id="card-04">
           <h2 className="gallery-card-title">Marketing</h2>
            <a href="" className="gallery-card-btn">Mais cursos</a>
         </div>
         <div className="gallery-card" id="card-05">
           <h2 className="gallery-card-title">Fotografia</h2>
            <a href="" className="gallery-card-btn">Mais cursos</a>
         </div>
         <div className="gallery-card" id="card-06">
           <h2 className="gallery-card-title">Música</h2>
            <a href="" className="gallery-card-btn">Mais cursos</a>
         </div>
      </div>
      <hr></hr>
        


            </main>
            </div> 
         <Rodape/>   
        </div>
     );
}
 
export default Home;