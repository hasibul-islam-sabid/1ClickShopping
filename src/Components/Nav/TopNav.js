import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './TopNav.css'
const TopNav = () => {
    return (
        <div>
            <Navbar className="navClass" variant="dark">
                <Container>                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <img src={logo} id="logo" href="#home" /> */}
                        </Nav>
                        <Nav>
                            <Nav.Link href="/" className="c-wh">Home</Nav.Link>
                            <Nav.Link href="/products">Products</Nav.Link>
                            <Nav.Link href="/offers">Offers</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/logIn">Log In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default TopNav;