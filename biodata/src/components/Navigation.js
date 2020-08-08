import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Row, Col} from 'react-bootstrap';
import '../css/Navigation.css';

export default () => (
    <div className="navigation">
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home" className="logo">Gru<span>.</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#wedo">We Do</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#whyus">Why US</Nav.Link>
                    <Nav.Link href="#faq">Faq</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>

                   
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                   
                    
                </Navbar.Collapse>
        </Navbar>
    </div>
)