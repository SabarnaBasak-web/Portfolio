import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Main({CV}) {
    return (
        <div className="main-container" id="about">
            <h1 className="main-heading">Hi ! </h1>
            <p className="main-content">
                I am <strong>Sabarna Basak, </strong> fullstack web developer from Kolkata, India. 
                I primarily like to work with minimalistic design while maintaining UI and UX and also I like to add, out of the box ideas. <br/>                
                Currently I am working at <a href="https://www.tcs.com/" className="main-content-link">Tata Consultancy Services</a> as a Developer (FullStack Web Developer).                
                <br/>
                Outside of work, you can find me busy with shooting and editing photos and videos <a href="https://www.instagram.com/basak_sankha/" className="main-content-link"><FontAwesomeIcon icon={faInstagram} /> Sankha Basak</a> <br/>
                <br/>
                As a freelance developer, I work across FullStack Javascript framework. <br/> 
                <button  className="btn"> <a href={CV} download>Download Resume</a> </button>
            </p>
        </div>
    )
}

export default Main
