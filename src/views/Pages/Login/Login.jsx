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
      <div className="app flex-row align-items-center ComponentAuth">
        <Alerts />
        <Container className='ContainerAuth'>
          <Row className="justify-content-center">
            <div className='bg-white'>
              <h1 id='TitleLogin'>WOLFBOT</h1>
            </div>
          </Row>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody className='CardBody_Login'>
                    <h1 id='TitleEntrar_Login'>Entrar</h1>
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
                          <Button type="submit" id='BtnEntrar_Login' className="px-4">Entrar</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0"><a id='BtnEsqueceuSenha_Login'>Esqueceu sua senha?</a></Button>
                        </Col>
                      </Row>
                    </form>
                  </CardBody>
                </Card>
                <Card className="text-white py-5 d-md-down-none" id='CardRegister_Login' style={{ width: 44 + '%' }}>
                  <CardBody className="text-center CardBody_Login">
                    <div>
                      <h2>Registrar</h2>
                      <p>Registre-se para utilizar o bot trader WolfBot.</p>
                      <Link to="/register"><Button id='BtnRegistrar_Login' className="mt-3"><a style={{ color: '#0a3b64' }}> Registrar agora!</a></Button></Link>
                    </div>
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

Login = reduxForm({ form: 'authForm' })(Login)
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)
export default connect(null, mapDispatchToProps)(Login)
