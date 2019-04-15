import React from "react";
import { Column, Notification } from "rbx";
import "rbx/index.css";

export class TestBulma extends React.Component {
  render() {
      return (
        <Column.Group>
            <Column>
                <Notification color="primary" textAlign="centered">
                    Primera Columna
                </Notification>
            </Column>
            <Column>
                <Notification color="primary" textAlign="centered">
                    Segunda Columna
                </Notification>
            </Column>
            <Column>
                <Notification color="primary" textAlign="centered">
                    Tercera Columna
                </Notification>
            </Column>
            <Column>
                <Notification color="primary" textAlign="centered">
                    Cuarta Columna
                </Notification>
            </Column>
        </Column.Group>
      )
  }
}

export default TestBulma;