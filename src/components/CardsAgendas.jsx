import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listaAgendas } from "../Server/Server";

function CardsAgendas() {

    const [agendas, setAgendas] = useState([]);

    async function listarAgendas() {
        try {
            const res = await listaAgendas();
            setAgendas(res);
        } catch (error) {
            console.log(error)
        }

    };
    useEffect(() => {
        listarAgendas()
    }, [setAgendas]);
    const fecha = new Date();
    

    return (
       
        <Container className="my-3">
          <Row>
            {
                agendas.filter(agenda=>agenda.fecha>fecha.toISOString()).map((agenda) => (
                    <Col  key={agenda.id}>
                    <Card
                      text={agenda.fecha}
                      style={{ width: '18rem' }}
                      className="mb-2"
                    >
                      <Card.Header>Fecha agenda: {agenda.fecha.slice(0,10)}</Card.Header>
                      <Card.Body>
                        <Card.Title>{} </Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                    <Link to={`/agenda/${agenda.id}`}><Button variant="primary">Ver Detalle</Button></Link>
                      </Card.Body>
                    </Card>
                    </Col>
                  ))}
                  </Row>
            
        </Container>
    )

}
export { CardsAgendas }