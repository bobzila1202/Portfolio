import React from "react";
import './HomePage.css';
import pdf from '../../assets/Balram_Singh_CV_3.pdf'
import programmerimg from '../../assets/CartoonProgrammer.png'

const HomePage = () => {
    return( 
        <div className="home" id="home">
        <div className="container">
            <h1 style={{color: "white"}}>Welcome to my portfolio!</h1>
            <img id="ProgrammerImg" src={programmerimg} alt="image of cartoon programmer" />
            <p>My name is Balram. I'm a Software Engineer.</p>
            <a id="linkedIn" href="https://www.linkedin.com/in/balram-singh-852419245/" target="_blank">LinkedIn</a>
            <a id="linkedIn" href= {pdf} target="_blank">CV</a>
        </div>
        </div>
        
    )
}

export default HomePage