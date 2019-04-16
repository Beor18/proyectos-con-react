import React, {Component} from "react";
import { Column, Notification, Container } from "rbx";
import "rbx/index.css";

const lista = [1,2,3,4,5,6,7,8];

class TestBulma extends Component {
  render() {
      return (
        <Container>
            <Column.Group multiline>
            {lista.map(i => (
                    <Column key={i} size="one-quarter">
                    <Notification color="primary" textAlign="centered">
                        Columna {i}
                    </Notification>
                    </Column>
                ))}
            </Column.Group>
        </Container>
      )
  }
}

export default TestBulma;