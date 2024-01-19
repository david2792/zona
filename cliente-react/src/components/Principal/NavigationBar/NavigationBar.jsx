import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavigationBar.css';

export default function NavigationBar() {
  return (
    <Navbar   expand="lg" fluid className='contenedor'>
    <Container >
      <Navbar.Brand href="#home" className='texto'>Mi Aplicación</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className='texto' href="#home">Inicio</Nav.Link>
          <Nav.Link className='texto' href="#link">Enlace</Nav.Link>
          {/* Agrega aquí más enlaces según sea necesario */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
