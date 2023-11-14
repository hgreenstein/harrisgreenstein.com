import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/websiteLogoCrop.png';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Moon from '../assets/moon.svg';
import Sun from '../assets/sun.svg';
import LinkedIn from '../assets/linkedin.svg';
function NavigationBar({darkMode, setDarkMode}) {


    return (
        <>
            {/*<img alt = "HG" src ={Logo} width = "60" height = "60" className = "d-inline-block align-center" />*/}
            <Navbar
                collapseOnSelect
                expand="lg"
                className={darkMode ? 'nav-dark bg-dark' : 'bg-light'}
            >
                <Container>
                    <div className="nav-left">
                    <Navbar.Brand href="/">
                        <p
                            className={
                                darkMode
                                    ? 'd-inline-block align-center h5 text-light'
                                    : 'd-inline-block align-center h5'
                            }
                        >
                            Harris Greenstein
                        </p>
                    </Navbar.Brand>
                    <div className = "nav-left-logo">
                    <Navbar.Brand href="https://www.linkedin.com/in/harrisgreenstein/">
                        <img src={LinkedIn} className="nav-linked"/>
                    </Navbar.Brand>
                    <ToggleButton
                        className={
                            darkMode
                                ? 'bg-primary border-dark h-50'
                                : 'bg-warning text-dark border-light h-50 nav-img'
                        }
                        id="toggle-check"
                        type="checkbox"
                        variant="outline-primary"
                        value="1"
                        size="sm"
                        onChange={() => setDarkMode(prevMode => !prevMode)}                    >
                        <img src={darkMode ? Moon : Sun}/>
                    </ToggleButton>
                    </div>
                    </div>
                    <Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#About" className={darkMode ? "navbar-collapse-item-dark text-light" : "navbar-collapse-item-light text-dark"}>About</Nav.Link>
                            <Nav.Link href="/Experience" className={darkMode ? "navbar-collapse-item-dark text-light" : "navbar-collapse-item-light text-dark"}>Experience</Nav.Link>
                            <Nav.Link href="/Projects" className={darkMode ? "navbar-collapse-item-dark text-light" : "navbar-collapse-item-light text-dark"}>Projects</Nav.Link>
                            <Nav.Link href="#Contact" className={darkMode ? "navbar-collapse-item-dark text-light" : "navbar-collapse-item-light text-dark"}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default NavigationBar;
