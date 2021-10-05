import React from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <Navbar bg="danger" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">Learn Programming</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <NavLink className="text-decoration-none mx-3 text-light" to="/home">Home</NavLink>
                    <NavLink className="text-decoration-none mx-3 text-light" to="/services">Service</NavLink>
                    <NavLink className="text-decoration-none mx-3 text-light" to="/about">About</NavLink>
                   
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;