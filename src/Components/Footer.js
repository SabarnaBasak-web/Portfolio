import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faCopyright } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className="footer">
            <h3 className="copyright"> Copyright <FontAwesomeIcon icon={faCopyright} />  2020  Sabarna Basak</h3>
            <ul className="social-icons">
                <li className="icons-list">
                   <a href="https://github.com/SabarnaBasak-web" ><FontAwesomeIcon icon={faGithub} /> GitHub </a> 
                </li>
                <li className="icons-list">
                   <a href="mailTo:sabarnabasak@gmail.com"> <FontAwesomeIcon icon={faEnvelopeSquare} /> Email </a> 
                </li>
                <li className="icons-list">
                   <a href="https://www.linkedin.com/in/sabarna-basak-30b2a1a5/"> <FontAwesomeIcon icon={faLinkedin} /> LinkedIn </a> 
                </li>
            </ul>
        </div>
    )
}

export default Footer
