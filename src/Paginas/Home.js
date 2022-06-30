import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Rodape from "../Modulos/Rodape";
import Whats from "../Modulos/Whats";
import { Link, useNavigate } from "react-router-dom";
import VerificaMenu from "../Modulos/VerificaMenu";
import { NavItem } from "react-bootstrap";

const Home = () => {
    const navigate = useNavigate();

    const mudarAssinatura = () => {
        navigate('/Assinatura')
    }

    require('../Styles/Home.css')
    return ( 
        <div>
            <VerificaMenu/>

            <Whats/>   

          <section className="header">
        <div className="header-text-box">
          <h1>Bem vindo a Station <t>Class!</t></h1>
            <p>O conhecimento está aqui.</p>
            <a className="header-text-box-botao" href="/Cursos">Conheça nossos cursos</a>
        </div>
          </section>

            <section className="plans">
          <h1>Planos Disponíveis</h1>
          <p>Acesse a área de Assinatura para mais informações.</p>
          <div className="plans-row">
                
                <div className="plans-row-plans-col" id="basico-row" onClick={() => mudarAssinatura()}>
                    <h3>Básico</h3>
                    <p>
                        Poucos benefícios inclusos.
                    </p>
                </div>

                <div className="plans-row-plans-col" id="premiun-row" onClick={() => mudarAssinatura()}> 
                    <h3>Premium</h3>
                    <p>
                        Todos benefícios inclusos.
                    </p> 
                </div>
 
                <div  className="plans-row-plans-col" id="padrao-row" onClick={() => mudarAssinatura()}>
                    <h3>Padrão</h3>
                    <p>
                        Alguns benefícios inclusos.
                    </p>
                </div>

              </div>
            </section>


            <section className="cta">
          <h1>Interaja em nossa comunidade!</h1>
        <a href="/Comunidade" className="cta-hero-btn">Navegue</a>
            </section>

            <div className="geral">
               
                <Carousel fade>
                    <Carousel.Item>
                        <div className="caixaimagem">
                        <img 
                        className="caixaimagem-carousel"
                        src="https://i.imgur.com/4zMQL28.png"
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
            <h5 className="textoprincipaiscategorias"><b>Principais categorias</b></h5>
            
          </div>
        <div className="gallery">
         <div className="gallery-card" id="card-01">
           <h2 className="gallery-card-title">Design</h2>
            <a href="/Cursos" className="gallery-card-btn">Mais cursos</a>
         </div>
         <div className="gallery-card" id="card-02">
           <h2 className="gallery-card-title">Programação</h2>
            <a href="/Cursos" className="gallery-card-btn">Mais cursos</a>
         </div>
         <div className="gallery-card" id="card-03">
           <h2 className="gallery-card-title">Finanças</h2>
            <a href="/Cursos" className="gallery-card-btn">Mais cursos</a>
         </div>
         <div className="gallery-card" id="card-04">
           <h2 className="gallery-card-title">Marketing</h2>
            <a href="/Cursos" className="gallery-card-btn">Mais cursos</a>
         </div>
         <div className="gallery-card" id="card-05">
           <h2 className="gallery-card-title">Fotografia</h2>
            <a href="/Cursos" className="gallery-card-btn">Mais cursos</a>
         </div>
         <div className="gallery-card" id="card-06">
           <h2 className="gallery-card-title">Música</h2>
            <a href="/Cursos" className="gallery-card-btn">Mais cursos</a>
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