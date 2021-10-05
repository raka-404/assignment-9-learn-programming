import React from 'react';
import {Container} from 'react-bootstrap';
import Aboutus from '../Aboutus/Aboutus';
import './About.css'
const About = () => {
    return (
        <>
        <div className="aboutBackground">
            <h1 className="mb-1 text-light text-center pt-5 fw-bold"><span style={{fontSize:'5rem'}}>Programming academy</span></h1>
            </div>
        <Container className="text-center">
            
            <h1 className="mb-3">About Us</h1>
            <h3>We are programming trainer</h3>
            <Aboutus></Aboutus>
          
        </Container>
        </>
    );
};

export default About;