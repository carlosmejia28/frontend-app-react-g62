import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
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
       
        <Container>
            {
                agendas.filter(agenda=>agenda.fecha>fecha.toISOString()).map((agenda) => (
                    <Card
                      key={agenda.id}
                      text={agenda.fecha}
                      style={{ width: '18rem' }}
                      className="mb-2"
                    >
                      <Card.Header>Agenda Id: {agenda.id}</Card.Header>
                      <Card.Body>
                        <Card.Title>{agenda.fecha.slice(0,10)} </Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                    <Link to={`/agenda/${agenda.id}`}><Button variant="primary">Ver Detalle</Button></Link>
                      </Card.Body>
                    </Card>
                  ))}
            
        </Container>
    )

}
export { CardsAgendas }