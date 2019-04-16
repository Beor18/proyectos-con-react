import React from "react";
import { Column, Notification } from "rbx";
import "rbx/index.css";

export class TestBulma extends React.Component {
  render() {
      return (
        <Column.Group multiline>
           {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <Column key={i} size="one-quarter">
                <Notification color="primary" textAlign="centered">
                    Columna {i}
                </Notification>
                </Column>
            ))}
        </Column.Group>
      )
  }
}

export default TestBulma;