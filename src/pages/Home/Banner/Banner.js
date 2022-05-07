
import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../Images/Slider/slider-1.jpg';
import img2 from '../../../Images/Slider/slider-2.jpg';
import img3 from '../../../Images/Slider/slider-3.jpg';


const Banner = () => {
    return (
        <div>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Order and Enjoy Your favorite food </h3>
                        <p>Minimum cost and interesting food all over the country, Hurry up!!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Order and Enjoy Your favorite food</h3>
                        <p>Minimum cost and interesting food all over the country, Hurry up!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Order and Enjoy Your favorite food</h3>
                        <p>Minimum cost and interesting food all over the country, Hurry up!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

           
        </div>
    );
};

export default Banner;