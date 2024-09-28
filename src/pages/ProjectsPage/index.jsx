import React from "react";
import './ProjectsPage.css'
import CarouselComponent from "../../components/Carousel";
import image1 from '../../assets/projectimage.png'
import image2 from '../../assets/projectimage2.png'
import image3 from '../../assets/projectimage3.png'

let projects = [
    {
        name: 'SZND Chef',
        image: image1,
        description: 'Dynamic full-stack seasonal recipe website',
        textColor: 'black' // Specify text color for this project
    },
    {
        name: 'TrashToTreasure',
        image: image2,
        description: 'Community recycle hub',
        textColor: 'black' // Specify text color for this project
    },
    {
        name: 'Refactory',
        image: image3,
        description: 'Interactive coding learning game',
        textColor: 'white' // Specify text color for this project
    }
];



const ProjectsPage = () => {
    return(
        <div className="projects" id="projects">
            <div className="container">
            <CarouselComponent projects = {projects} />
            </div>
        </div>
    )
}

export default ProjectsPage