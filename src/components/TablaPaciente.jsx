import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deletePacienteById, listaPacientes } from "../Server/Server";

function TablaPaciente() {

    const [listPaciente, setListaPaciente] = useState([]);

    async function listarPacientes() {
        try {
            const res = await listaPacientes();
            setListaPaciente(res);
        } catch (error) {

        }
    }
    useEffect(() => {
        listarPacientes();
    }, [setListaPaciente]);


    async function eliminarPaciente(id) {
        let result = window.confirm("Seguro de Eliminar");
        if (result) {
            const res = await deletePacienteById(id);
            alert(res);
            setListaPaciente(listPaciente.filter(paciente => paciente.id !== id))
        }

    }


    let contadorPacientes = 0;


    return (
        <Container>
            <Row className="my-3">
                <Col><h2>Pacientes</h2></Col>
                <Col xs={6}></Col>
                <Col><Link to="/paciente/form"><Button variant="success">Registrar</Button></Link></Col>
            </Row>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>F. Nacimiento</th>
                        <th>Ciudad</th>
                        <th>Ver Detalle</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        listPaciente.map((paciente) => (
                            <tr key={paciente.id}>
                                <td>{++contadorPacientes}</td>
                                <td>{paciente.nombre}</td>
                                <td>{paciente.apellido}</td>
                                <td>{paciente.fnacimiento}</td>
                                <td>{paciente.ubicacion.ciudad}</td>
                                <td><Link to={`/paciente/${paciente.id}`}>Ver Detalle</Link></td>
                                <td ><Button variant="danger" onClick={() => eliminarPaciente(paciente.id)}>Eliminar</Button></td>
                            </tr>
                        )

                        )
                    }
                </tbody>
            </Table>
        </Container>
    )
}
export { TablaPaciente }