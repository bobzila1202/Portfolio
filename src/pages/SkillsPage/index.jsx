import React from "react";
import './SkillsPage.css'

const SkillsPage = () => {
    return(
        <div className="skills" id="skills">
            <h1>My Skills</h1>
            <p>Familiar with producing code for both front-end and back-end while testing with frameworks such as Jest, Vitest and Pytest </p>
            <div className="container">
            <div> <img className="item" src="/assets/css icon.svg" alt="" /> <p>CSS</p> </div>
            <div> <img className="item" src="src\assets\html icon.svg" alt="" /> <p>HTML</p> </div>
            <div> <img className="item" src="src\assets\js icon.svg" alt="" /> <p>JavaScript</p> </div>
            <div> <img className="item" src="src\assets\node js icon.svg" alt="" /> <p>Node.JS</p> </div>
            <div> <img className="item" src="src\assets\flask-svgrepo-com (1).svg" alt="" /> <p>Flask</p> </div>
            <div> <img className="item" src="src\assets\python icon.svg" alt="" /> <p>Python</p> </div>
            <div> <img className="item" src="src\assets\react icon.svg" alt="" /> <p>ReactJS</p> </div>
            <div> <img className="item" src="src\assets\sql icon.svg" alt="" /> <p>SQL</p> </div>
            <div> <img className="item" src="src\assets\postgresql icon.svg" alt="" /> <p>PostgreSQL</p> </div>
            <div> <img className="item" src="src\assets\github-142-svgrepo-com (2).svg" alt="" /> <p>Github</p> </div>
            </div>
        </div>
    )
}

export default SkillsPage