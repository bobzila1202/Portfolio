import React from "react";
import './ProjectsPage.css'
import CarouselComponent from "../../components/Carousel";

let projects = [
    {
        name: 'SZND Chef',
        image: 'src/assets/projectimage.png',
        description: 'Dynamic full-stack seasonal recipe website',
        textColor: 'black' // Specify text color for this project
    },
    {
        name: 'TrashToTreasure',
        image: 'src/assets/projectimage2.png',
        description: 'Community recycle hub',
        textColor: 'black' // Specify text color for this project
    },
    {
        name: 'Refactory',
        image: 'src/assets/projectimage3.png',
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