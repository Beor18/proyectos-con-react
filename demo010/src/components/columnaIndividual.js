import React, {Component} from "react";
import { Content, Title, Container, Hero } from "rbx";
import "rbx/index.css";

class ColumnaIndividual extends Component {
    render() {
        return (
            <Container>
                <Hero color="primary">
                    <Hero.Body>
                        <Container>
                            <Title>COLUMNA</Title>
                            <Title as="h2" subtitle>
                                Algo
                            </Title>
                        </Container>
                    </Hero.Body>
                </Hero>
                 <Content>
                    <Title>Hola Mundo!</Title>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,
                        metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum
                        justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio,
                        sollicitudin vel erat vel, interdum mattis neque.
                    </p>
                    <Title as="h2">Segundo título</Title>
                    <p>
                        Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong>{' '}
                        blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id.
                        Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis
                        sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque
                        nisl.
                    </p>
                    <ul>
                        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                        <li>
                            Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
                        </li>
                        <li>Ut non enim metus.</li>
                    </ul>
               </Content>
            </Container>
        )
  }
}

export default ColumnaIndividual;