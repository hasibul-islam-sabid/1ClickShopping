import React from 'react';
import { Button, Container, FormControl, Nav, Navbar, Form } from 'react-bootstrap';
import './LogoSearch.css';
import logo from '../../Images/logo.png'

const LogoSearch = () => {
    return (
        <>
            <Navbar id="logoSearch">
                <Container>
                    <Navbar.Brand href="#"><img src={logo} id="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">                        
                        <Form className="d-flex w-70">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default LogoSearch;