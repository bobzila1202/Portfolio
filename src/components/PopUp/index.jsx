import "./PopUp.css"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"    

const PopUp = ({SetOpenPopUp}) => {
    

    return (
        <div onClick={() => {SetOpenPopUp(false)}} data-testid="modalBackground" className="modalBackground">
            <div onClick={(click) => {click.stopPropagation()}} data-testid="modalContainer" className="modalContainer">
                <div className="title">
                    <h1>Contact Me</h1>
                </div>
                <div className="body">
                    <FontAwesomeIcon icon="fa-solid fa-envelope" style={{color: "#ffffff",}} />
                    <p>balram_singh08@hotmail.com</p>
                    <FontAwesomeIcon icon="fa-solid fa-phone" style={{color: "#ffffff",}} />
                    <p>07495644660</p>
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" style={{color: "#ffffff",}} />
                    <p>United Kingdom, London</p>
                </div>
                <div className="footer">
                    <button onClick={() => {SetOpenPopUp(false)}}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default PopUp