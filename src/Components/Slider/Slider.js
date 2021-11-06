import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'
import slider1 from '../../Images/SliderImage/slider1.jpg'
import slider2 from '../../Images/SliderImage/slider2.jpg'
import slider3 from '../../Images/SliderImage/slider3.jpg'


const Slider = () => {
    return (
            <div className="sliderBody">
                <Carousel className="slider">
                    <Carousel.Item interval={1000}>
                        <img
                            className="slider_image"
                            src={slider1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="slider_image"
                            src={slider2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="slider_image"
                            src={slider3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
    );
};

export default Slider;