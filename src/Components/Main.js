import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import css3 from '../assets/images/css3.svg';
import html from '../assets/images/html-5.svg';
import graphql from '../assets/images/graphql.svg';
import javascript from '../assets/images/javascript.svg'
import react from '../assets/images/react.svg'
import nestjs from '../assets/images/nestjs.svg'
import firebase from '../assets/images/firebase.svg';

function Main({ CV }) {
    return (
        <div className="main-container" id="about">
            <h1 className="main-heading">Hi ! </h1>
            <p className="main-content">
                I am <strong>Sabarna Basak, </strong> fullstack web developer from Kolkata, India.
                I primarily like to work with minimalistic design while maintaining UI and UX and also I like to add,
                out of the box ideas. <br />
                Currently I am working at
                <a href="https://www.neudesic.com/" className="main-content-link"> Neudesic</a> as a Frontend Engineer on both web and native.
                <br />
                Outside of work, you can find me busy with shooting and editing photos and videos
                <a href="https://www.instagram.com/basak_sankha/" className="main-content-link"> <FontAwesomeIcon icon={faInstagram} /> Sankha Basak</a> <br />
                <br />
                As a freelance developer, I work across FullStack Javascript framework. <br />

                <div className='icons'>
                    <h4> I work with</h4>
                    <img src={html} alt='html' />
                    <img src={css3} alt='css-3' />
                    <img src={javascript} alt='javascript' />
                    <img src={react} alt='react' className='size-48' />
                    <img src={graphql} alt='graphql' />
                    <img src={firebase} alt='firebase' />
                    <img src={nestjs} alt='nestjs' className='size-48' />
                </div>
                <button className="btn"> <a href={CV} download>Download Resume</a> </button>
            </p>
        </div>
    )
}

export default Main
