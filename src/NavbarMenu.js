import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarMenu.css';

const NavbarMenu = () => {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar" variant="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">VAT Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="vat-navbar" />
        <Navbar.Collapse id="vat-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item href="#vat-registration">VAT Registration</NavDropdown.Item>
              <NavDropdown.Item href="#return-filing">Return Filing</NavDropdown.Item>
              <NavDropdown.Item href="#refund">Refund</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
