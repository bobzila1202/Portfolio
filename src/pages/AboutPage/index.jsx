import React from "react";
import './AboutPage.css'

const AboutPage = () => {
    return(
        <div className="about" id="about">
            <div className="container">
                <h1 >About Me</h1>
                <p className="aboutMe">A highly motivated software engineer with experience deploying projects and working on teams looking for a new challenge. Constantly working on projects and eager to develop my skills to a higher degree. Outside of my tech life I am a huge advocate for physical fitness and have niche hobbies such as powerlifting and playing pc games.</p>
                <img id="myPic" src="src\assets\IMG-20231021-WA0002.jpg" alt="A picture of me" />
            </div>
        </div>
        
    )
}

export default AboutPage