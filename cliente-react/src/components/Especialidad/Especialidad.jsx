import React, { useState } from 'react'
import axios from 'axios';
import API_URL from '../API/apiConfig'
import './Especialidad.css'
import {Card,Alert, Form, Button, Container } from 'react-bootstrap';
export default function Especialidad() {
    const [descripcion, setDescripcion] = useState('')
    const [error, setError] = useState('');
    const [exito, setExito] = useState(false); // Estado para controlar la alerta de éxito

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Objeto con los datos a enviar
        const datosCuenta = {
            descripcion: descripcion,
        };
        if (Object.values(datosCuenta).some((campo) => campo === '')) {
            setError('Por favor, completa todos los campos');
            return; // Evitar que se realice la solicitud
          }
          try {
            const response = await axios.post(API_URL+'referencial/especialidad', datosCuenta);
      
            if (response.status === 200) {
              console.log('Datos enviados con éxito');
              setDescripcion('');
              setError('');
              
              // Mostrar la alerta de éxito
              setExito(true);
      
              // Ocultar la alerta después de un tiempo (por ejemplo, 3 segundos)
              setTimeout(() => {
                setExito(false);
              }, 3000); // 3000 milisegundos (3 segundos)
            } else {
              console.error('Error al enviar datos');
            }
          } catch (error) {
            console.error('Error en la solicitud:', error);
          }
        };


    return (
        <Container className="d-flex justify-content-center">
      <Card className="mt-3">
          <Card.Body>
            <h2>Registros de Especialidad</h2>

            {error && <p className="text-danger">{error}</p>}
          {exito && (
            <Alert variant="success" onClose={() => setExito(false)} dismissible>
              Datos enviados con éxito
            </Alert>
          )}


            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="descripcion">
                <Form.Label>Descripción:</Form.Label>
                <Form.Control
                  type="text"
                  autoComplete='off'
                  placeholder='Ingrese la especialidad'
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </Form.Group>
              <Button className='botones' type="submit">Guardar</Button>
              <Button className='botones'  variant="danger" >Cancelar</Button>
              <Button className='botones'  variant="warning" >Ver Registros</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    )
}
