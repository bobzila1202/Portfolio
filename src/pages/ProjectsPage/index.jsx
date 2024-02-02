import React from "react";
import './ProjectsPage.css'
import CarouselComponent from "../../components/Carousel";

let projects = [ 
{   
    name : 'name',
    image : 'src/assets/projectimage.jpg',
    description: 'description'
},
{   
    name : 'name1',
    image : 'src/assets/projectimage2.jpg',
    description: 'description1'
},
{   
    name : 'name3',
    image : 'src/assets/projectimage.jpg',
    description: 'description3'
}
]

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