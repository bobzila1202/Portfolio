import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import CarouselCaption from 'react-bootstrap/CarouselCaption'
import { Image } from 'react-bootstrap';
import './Carousel.css'


const CarouselComponent = ({ projects }) => {
    return (
        <Carousel id="carousel">
            {projects.map((project, index) => (
                <CarouselItem key={index}>
                    <Image src={project.image} alt={project.name} />
                    <CarouselCaption>
                        <h3 style={{ color: project.textColor, fontWeight: 'bold' }}>{project.name}</h3> 
                        <p style={{ color: project.textColor, fontSize: '20px', fontWeight: 'bold' }}>{project.description}</p>
                    </CarouselCaption>
                </CarouselItem>
            ))}
        </Carousel>
    );
};

export default CarouselComponent

