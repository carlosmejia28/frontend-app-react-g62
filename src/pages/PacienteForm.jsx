import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { savePaciente } from "../Server/Server";

function PacienteForm() {

    const navigate = useNavigate();
    function returnToPacientes() {
        navigate("/paciente")
    }

    const [paciente, setPaciente] = useState({
        nombre: "",
        apellido: "",
        fnacimiento: "",
        alergias: "",
        ubicacion: "",
        departamento: "",
        ciudad: "",
        direccion: ""
    });

    function handleChange({ target }) {
        setPaciente({
            ...paciente,
            [target.name]: target.value
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        paciente.alergias = paciente.alergias.split(',');

        paciente.ubicacion = {
            departamento: paciente.departamento,
            ciudad: paciente.ciudad,
            direccion: paciente.direccion
        };
        delete paciente.departamento;
        delete paciente.ciudad;
        delete paciente.direccion;

        const response = await savePaciente(paciente);

        alert(response);
        returnToPacientes();

    }

    return (
        <Container>
            <h1>Registrar Paciente</h1>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col xs="auto" className="my-1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="nombre"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="apellido"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Label>Fecha de Nacimiento</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="fnacimiento"
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs="auto" className="my-1">
                        <Form.Label>Departamento</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="departamento"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="ciudad"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="direccion"
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row >
                    <Col className="my-1" xs lg="3">
                        <Form.Label>Alergias</Form.Label>
                        <textarea className="form-control"
                            type="text"
                            name="alergias"
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 3, offset: 3 }}><Button variant="success" type="submit">Guardar</Button></Col>
                </Row>

            </Form>
            <Row xs={2} md={4} lg={6} className="my-3">
                <Col> <Button onClick={returnToPacientes}>Volver</Button></Col>
            </Row>
        </Container>
    )
}
export { PacienteForm }