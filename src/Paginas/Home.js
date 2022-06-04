import React from "react";
import Menu from "../Modulos/Menu";
import Carousel from 'react-bootstrap/Carousel'
import MenuAL from "../Modulos/MenuAL";

const Home = () => {
    require('./Home.css')
    return ( 
        <div>
            <Menu/>
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 "
                        src="https://wallpaperaccess.com/full/6359574.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
        </div>
     );
}
 
export default Home;