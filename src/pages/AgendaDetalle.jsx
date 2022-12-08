import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { findAgendaById, saveAgenda } from "../Server/Server";

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
    const [horaRadio, setHoraRadio] = useState("");

    useEffect(() => {
        findAgendaById(id).then(data => {
            setAgenda(data);
            setCitas(data.citas)
            setEspecialidades(data.especialidadMedico);
            setFecha(data.fecha)
        });
    }, [id]);

    const handleSelect = (e) => {
        setHoraRadio(e.target.value);
    }

    async function handleSubmit() {
        if (horaRadio !== "") {
            agenda.citas.push({ hora: horaRadio, id_paciente: "" });
            saveAgenda(agenda);
            alert("Cita agendada")
            returnToPacientes()
                        
        } else {
            alert("Selecciona un horario")
        }
    }

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
                                value={hora}
                                onChange={handleSelect}
                                disabled={horariosOcupado.includes(hora) ? true : false}
                            />
                        ))
                    }
                </Col>
            </Row>
            <Row xs={2} md={4} lg={6}>
                <Col>
                    <Button onClick={() => returnToPacientes()}>Regresar</Button>
                </Col>
                <Col>
                    <Button variant="success" onClick={() => handleSubmit()}>Registrar Cita</Button>
                </Col>
            </Row>
        </Container>
    )
}
export { AgendaDetalle }