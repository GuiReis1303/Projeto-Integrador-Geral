import React from "react";
import MenuAL from "../Modulos/MenuAL";
import Carousel from 'react-bootstrap/Carousel'
import Rodape from "../Modulos/Rodape";

const Home = () => {
    require('./Home.css')
    return ( 
        <div>
            <MenuAL/>
            <div>
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