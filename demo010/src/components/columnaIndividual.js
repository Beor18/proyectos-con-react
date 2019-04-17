import React, {Component} from "react";
import { Notification, Container } from "rbx";
import "rbx/index.css";

class ColumnaIndividual extends Component {
    render() {
        return (
            <Container>
                 <Notification color="primary" textAlign="centered">
                    Columna
                 </Notification>
            </Container>
        )
  }
}

export default ColumnaIndividual;