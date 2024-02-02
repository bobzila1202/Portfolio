import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import CarouselCaption from 'react-bootstrap/CarouselCaption'
import { Image } from 'react-bootstrap';
import './Carousel.css'


const CarouselComponent = ({projects}) => {

    return(
    <Carousel id='carousel'>
                {projects.map((projects, index) =>(
                <CarouselItem key={index}>
                <Image src={projects.image} alt={projects.name} />
                <CarouselCaption>
                    <h3>{projects.name}</h3>
                    <p>{projects.description}</p>
                </CarouselCaption>
                </CarouselItem>
                ))}
    </Carousel>
)}

export default CarouselComponent

