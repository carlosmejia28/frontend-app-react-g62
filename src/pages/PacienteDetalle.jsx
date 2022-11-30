import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { findPacienteById } from "../Server/Server";

function PacienteDetalle() {
    const { id } = useParams();

    const navigate = useNavigate();
    function returnToPacientes(){
        navigate("/paciente")
    }

    const [paciente, setPaciente] = useState({});

    // const[alergias,setAlergias]=useState([])

    useEffect(() => {
        findPacienteById(id).then(data => {
            setPaciente(data);
            // setAlergias(data.alergias)
        });
    }, [id])

    return (
        <>
        <h1>Detalle de Paciente</h1>
        <Form>
            <Row>
                <Col xs="auto" className="my-1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control placeholder={paciente.nombre} />
                </Col>
                <Col xs="auto" className="my-1">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control placeholder={paciente.apellido} />
                </Col>
                <Col xs="auto" className="my-1">
                    <Form.Label>Fecha de Nacimiento</Form.Label>
                    <Form.Control placeholder={paciente.fnacimiento} />
                </Col>

                </Row>
                <Row>
                    <Col xs="auto" className="my-1">
                        <Form.Label>Departamento</Form.Label>
                        <Form.Control placeholder={paciente.ubicacion !== undefined ? paciente.ubicacion.departamento : "null"} />
                    </Col>
                    <Col xs="auto" className="my-1">
                    <Form.Label>Ciudad</Form.Label>
                        <Form.Control placeholder={paciente.ubicacion !== undefined ? paciente.ubicacion.ciudad : "null"} />
                    </Col>
                    <Col xs="auto" className="my-1">
                    <Form.Label>Dirección</Form.Label>
                        <Form.Control placeholder={paciente.ubicacion !== undefined ? paciente.ubicacion.direccion : "null"} />
                    </Col>
                </Row>
                <Row >
                <Col  className="my-1" xs lg="3">
                    <Form.Label>Alergias</Form.Label>

                       {/*  <Form.Select>
                            {
                                alergias.map((alergia)=>(
                                    <option key={alergia} >{alergia}</option>
                                ))
                            }
                        </Form.Select> */}
                        <textarea className="form-control" placeholder={paciente.alergias} />
                    </Col>

                </Row>
            
        </Form>
        <br/>
        <Button onClick={returnToPacientes}>Volver</Button>
        </>
       
    )

}
export { PacienteDetalle }