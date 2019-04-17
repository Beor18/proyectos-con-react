import React, {Component} from "react";
import { Column, Notification, Container } from "rbx";
// import { BrowserRouter as Link } from "react-router-dom";
import "rbx/index.css";

const lista = [
    {
        id: 1,
        nombre: 'Un titulo'
    },
    {
        id: 2,
        nombre: 'Dos  titulo'
    },
];

class TestBulma extends Component {
    render() {
        return (
            <Container>
                <Column.Group multiline>
                {lista.map(i => (
                        <Column key={i.id} size="one-quarter">
                            <Notification color="primary" textAlign="centered">
                                <a href={i.id}>Columna {i.nombre}</a>
                            </Notification>
                        </Column>
                ))}
                </Column.Group>
            </Container>
        )
  }
}

export default TestBulma;