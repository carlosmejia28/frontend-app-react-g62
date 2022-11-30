import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Menu() {
    return(
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MediCitas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink to="/" className="nav-link">Inicio</NavLink>
            <Nav.Link href="https://es.reactjs.org/" target="_blank">React</Nav.Link>
            <NavDropdown title="Más Opciones" id="basic-nav-dropdown">
              <NavLink to="/paciente" className="nav-link">Paciente</NavLink>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export {Menu}