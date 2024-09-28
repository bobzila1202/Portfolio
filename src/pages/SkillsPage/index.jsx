import React from "react";
import './SkillsPage.css';

import cssIcon from '../../assets/css icon.svg';
import htmlIcon from '../../assets/html icon.svg';
import jsIcon from '../../assets/js icon.svg';
import nodeJsIcon from '../../assets/node js icon.svg';
import flaskIcon from '../../assets/flask-svgrepo-com (1).svg';
import pythonIcon from '../../assets/python icon.svg';
import reactIcon from '../../assets/react icon.svg';
import sqlIcon from '../../assets/sql icon.svg';
import postgresqlIcon from '../../assets/postgresql icon.svg';
import githubIcon from '../../assets/github-142-svgrepo-com (2).svg';

const SkillsPage = () => {
    return (
        <div className="skills" id="skills">
            <h1>My Skills</h1>
            <p>Familiar with producing code for both front-end and back-end while testing with frameworks such as Jest, Vitest and Pytest </p>
            <div className="container">
                <div> <img className="item" src={cssIcon} alt="CSS" /> <p>CSS</p> </div>
                <div> <img className="item" src={htmlIcon} alt="HTML" /> <p>HTML</p> </div>
                <div> <img className="item" src={jsIcon} alt="JavaScript" /> <p>JavaScript</p> </div>
                <div> <img className="item" src={nodeJsIcon} alt="Node.JS" /> <p>Node.JS</p> </div>
                <div> <img className="item" src={flaskIcon} alt="Flask" /> <p>Flask</p> </div>
                <div> <img className="item" src={pythonIcon} alt="Python" /> <p>Python</p> </div>
                <div> <img className="item" src={reactIcon} alt="ReactJS" /> <p>ReactJS</p> </div>
                <div> <img className="item" src={sqlIcon} alt="SQL" /> <p>SQL</p> </div>
                <div> <img className="item" src={postgresqlIcon} alt="PostgreSQL" /> <p>PostgreSQL</p> </div>
                <div> <img className="item" src={githubIcon} alt="Github" /> <p>Github</p> </div>
            </div>
        </div>
    );
}

export default SkillsPage;
