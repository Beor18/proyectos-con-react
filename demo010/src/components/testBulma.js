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

const ColumnaContenedor = (props) => {
    return(
        <div>
            <h1>{props.id} </h1>
            <h1>{props.nombre} </h1>
        </div>
    )
}

class TestBulma extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            nombre: 'Algo'
        }
    }

    render() {

        return (
            <Container>
                <Column.Group multiline>
                {lista.map(i => (
                        <Column key={i.id} size="one-quarter">
                            <Notification color="primary" textAlign="centered">
                                <a href={i.id}>Columna {i.nombre}</a>
                                <ColumnaContenedor id={this.state.id} nombre={this.state.nombre}/>
                            </Notification>
                        </Column>
                ))}
                </Column.Group>
            </Container>
        )
  }
}

export default TestBulma;