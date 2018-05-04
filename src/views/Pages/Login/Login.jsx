import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { login } from '../../../_actions/authActions'
import Input from '../../../containers/Components/Input'
import Alerts from '../../../containers/Components/Alerts'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onSubmit(values) {
    const { login } = this.props
    login(values)
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div className="app flex-row align-items-center">
        <Alerts />
        <Container>
          <Row className="justify-content-center">
            <h1>WolfBoot</h1>
          </Row>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1>Entrar</h1>
                    <p className="text-muted">Entre em sua conta</p>
                    <form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field component={Input} type="email" name="email" placeholder="Email" className="form-control" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field component={Input} type="password" name="password" placeholder="Password" className="form-control" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button type="submit" color="primary" className="px-4">Entrar</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Esqueceu sua senha?</Button>
                        </Col>
                      </Row>
                    </form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Registrar</h2>
                      <p>Registre-se para utilizar o bot trader WolfBot.</p>
                      <Link to="/register"><Button color="primary" className="mt-3">Registrar agora!</Button></Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Login = reduxForm({ form: 'authForm' })(Login)
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)
export default connect(null, mapDispatchToProps)(Login)
