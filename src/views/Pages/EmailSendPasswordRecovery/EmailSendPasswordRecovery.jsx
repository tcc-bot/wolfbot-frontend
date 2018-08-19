import React, { Component } from 'react';
import { Card, CardBody, CardGroup, Col, Container, Row } from 'reactstrap';

import Alerts from '../../../containers/components/Alerts'

class EmailSendPasswordRecovery extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="app flex-row align-items-center ComponentAuth">
        <Alerts />
        <Container className='ContainerAuth'>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card id="cardLogin" className="card p-4">
                  <CardBody>
                    <h1>Email de recuperação de senha enviado!</h1>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}

export default EmailSendPasswordRecovery
