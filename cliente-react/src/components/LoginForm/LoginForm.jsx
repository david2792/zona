import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './LoginForm.css';
import axios from 'axios';
import API_URL from '../API/apiConfig'

export default function LoginForm() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = () => {
        event.preventDefault();
        // Aquí manejarías la autenticación
        console.log('Email:', email, 'Password:', password);
    }
  return (
    <Container fluid className="login-container">
    <Row>
      <Col md={6} className="login-section-wrapper">
        <div className="brand-wrapper">
         <img className='logo' src="../../public/img/logo.jpg" alt="" />
        </div>
        <div className="login-wrapper my-auto">
          <h1 className="login-title">Bienvenido al Sistema</h1>
          <Form className="login-form">
            <Form.Group>
              <Form.Label className='texto'>Usuario</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el usuario" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Clave</Form.Label>
              <Form.Control type="password" placeholder="Ingrese la contraseña" />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn-login">
              INGRESAR
            </Button>
            <a className="forgot-password-link" href="#">Olvido su contraseña?</a>
            <p>
            
            </p>
          </Form>
        </div>
      </Col>
      <Col md={6} className="d-none d-md-flex bg-image"></Col>
    </Row>
  </Container>
  )
}
