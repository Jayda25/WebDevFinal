import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNav: React.FC = () => {
  
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home">Recipe Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
            <Nav.Link as={Link} to="/newsletter">Newsletter</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
};

export default MyNav;
