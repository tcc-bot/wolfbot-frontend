import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, InputGroup, Label, Input, Form } from 'reactstrap';

import Alerts from '../../containers/Components/Alerts'

class Configuracao extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Alerts />
                <Row>
                    <Col xs="12" lg="12" sm="12">
                        <Card className="card">
                            <CardHeader>
                                <i className="icon-settings"></i> Configuração
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <InputGroup className="mb-3">
                                        <Col lg="2">
                                            <Label >
                                                <h6>Exchange</h6>
                                            </Label>
                                        </Col>
                                        <Col>
                                            <select name="moedas" id="moedas">
                                                <option value="valor1">Valor 1</option>
                                                <option value="valor2" selected>Valor 2</option>
                                                <option value="valor3">Valor 3</option>
                                            </select>
                                        </Col>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Col lg="2">
                                            <Label>
                                                <h6>API Key</h6>
                                            </Label>
                                        </Col>
                                        <Col>
                                            <Input type="text" className="form-control" />
                                        </Col>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Col lg="2">
                                            <Label>
                                                <h6>API Secret</h6>
                                            </Label>
                                        </Col>
                                        <Col>
                                            <Input type="text" className="form-control" />
                                        </Col>
                                    </InputGroup>
                                    <hr />
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Configuracao;