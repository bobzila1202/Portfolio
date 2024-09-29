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
        linkFront: "https://github.com/SmithNJ13/yao42_frontend/tree/staging",
        linkBack: "https://github.com/ollie-byrne99/Lap_4_Server",
        textColor: 'black' // Specify text color for this project
    },
    {
        name: 'TrashToTreasure',
        image: image2,
        description: 'Community recycle hub',
        link: "https://github.com/fillygee/FCC---Trash-to-Treasure",
        textColor: 'black' // Specify text color for this project
    },
    {
        name: 'Refactory',
        image: image3,
        description: 'Interactive coding learning game',
        linkBack: "https://github.com/bobzila1202/backend/",
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