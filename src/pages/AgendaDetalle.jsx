import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { findAgendaById } from "../Server/Server";

function AgendaDetalle() {

    const { id } = useParams();

    const navigate = useNavigate();

    function returnToPacientes() {
        navigate("/agenda")
    }

    const [agenda, setAgenda] = useState({});
    const [citas, setCitas] = useState([]);
    const [especialidades, setEspecialidades] = useState([]);
    const [fecha, setFecha] = useState("");

    useEffect(() => {
        findAgendaById(id).then(data => {
            setAgenda(data);
            setCitas(data.citas)
            setEspecialidades(data.especialidadMedico);
            setFecha(data.fecha)
        });
    }, [id])


    let horarios = ["08:00-08:30", "08:30-09:00", "09:00-09:30", "09:30-10:00", "10:00-10:30", "10:30-11:00"]
    let horariosOcupado = [];
    citas.map((cita) => (
        horariosOcupado.push(cita.hora)
    ))

    return (
        <Container className="my-3">
             <Row>
                <Col >
                <p>Fecha Agenda</p>
                <h3>{fecha.slice(0, 10)}</h3>
                </Col>
                <Col>
                <p>Nombre del Medico</p>
                <h2>{agenda.nombreMedico}</h2>
                </Col>            
            <Col>
            <p>Especialidades del Medico</p>
                <ul>
                    {
                        especialidades.map((especialidad) => (
                            <li key={especialidad}>{especialidad}</li>
                        ))
                    }
                </ul>
            </Col>
            </Row>
            <Row xs={2} md={4} lg={6} >
                <Col xs lg="2">
                    Horarios disponibles:
                </Col>
                <Col md="auto">
                        {
                            horarios.map((hora) => (
                                <Form.Check className="my-3"
                                    key={hora}
                                    type="radio"
                                    label={hora}
                                    name="hora"
                                    disabled={horariosOcupado.includes(hora) ? true : false}
                                />
                            ))
                        }
                </Col>
            </Row>
            <Button type="submit" onClick={() => returnToPacientes()}>Regresar</Button>
        </Container>
    )
}
export { AgendaDetalle }