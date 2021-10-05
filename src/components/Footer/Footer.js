import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-custom text-light text-center pt-5 cusFooter">
            <Container className="footerGrid">
                <div>
                    <h3 className="text-start">Courses details</h3>
                    <ul className="d-block p-0 m-0">
                    <li>Duration - 6 months</li>
                        <li>Course fee - 5K</li>
                        <li>Course Assignment - yes</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-start">Learn step</h3>
                    <ul className="d-block p-0 m-0">
                        <li>Beginner</li>
                        <li>Basic</li>
                        <li>Enter mediate</li>
                        <li>Professional</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-start">Certification</h3>
                    <ul className="d-block p-0 m-0">
                        <li>Web Development - yes </li>
                        <li>Javascript - yes</li>
                        <li>Python = yes</li>
                    </ul>
                </div>
            </Container>
            <p className="p-3 m-0">&copy; copy right by Rakib</p>
        </div>
    );
};

export default Footer;