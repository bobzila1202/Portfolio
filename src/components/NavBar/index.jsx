import React from 'react';
import {Link} from 'react-scroll';
import './NavBar.css'


const NavBar = ({SetOpenPopUp}) => {
    return <div className='header'>
            <nav className='navbar'>
                <div id='navcenter'>
                        <Link className="navlink" smooth={true} spy={true} offset={0} duration={100} to="home" >Home</Link>
                        <Link className="navlink" smooth={true} spy={true} offset={0} duration={100} to="about" >About Me</Link>
                        <Link className="navlink" smooth={true} spy={true} offset={0} duration={100} to="skills" >Skills</Link>
                        <Link className="navlink" smooth={true} spy={true} offset={0} duration={100} to="projects" >Projects</Link>
                </div>
                <div id='navright'>
                        <button className="contactlink" onClick={() => SetOpenPopUp(true)}>Contact me</button>
                </div>
            </nav>
            </div>
            
};


export default NavBar;