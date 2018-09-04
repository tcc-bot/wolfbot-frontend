import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, Redirect } from 'react-router-dom'

import { signup } from '../Login/authActions'
import Input from '../../../containers/Components/Input'
import Alerts from '../../../containers/Components/Alerts'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onSubmit(values) {
    const { signup } = this.props
    signup(values)
  }

  render() {
    const { handleSubmit, reset } = this.props
    return (
      <div className="app flex-row align-items-center ComponentAuth">
        <Alerts />
        <Container className="ContainerAuth">
          <Row className="justify-content-center">
            <Col md="6">
              <Card id="cardRegister" className="mx-4">
                <CardBody className="p-4">
                  <h1>Registrar</h1>
                  <p className="text-muted">Crie sua conta</p>
                  <form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Field component={Input} type="nome" name="nome" placeholder="Nome" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Field component={Input} type="email" name="email" placeholder="Email" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Field component={Input} type="password" name="password" placeholder="Senha" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Field component={Input} type="password" name="confirm_password" placeholder="Confirmação da senha" />
                    </InputGroup>
                    <Button type="submit" className="btn btn-outline-success" block>Cadastrar</Button>
                    <Button type="reset" onClick={reset} className="btn btn-outline-primary" block>Limpar</Button>
                  </form>
                </CardBody>
                <CardFooter id="cardFooterRegister" className="p-4">
                  <Row className="justify-content-center">
                    <p id="textCardRegister" className="text-muted">Já tem uma conta?</p>
                    <Link to="/login"><Button color="link" className="px-0">Entrar</Button></Link>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
        {this.props.redirectPageEmailSuccess ? <Redirect from="/" to="/emailsendactiveaccount" /> : null}
      </div>
    );
  }
}

Register = reduxForm({ form: 'authForm' })(Register)
const mapStateToProps = (state) => ({
  redirectPageEmailSuccess: state.auth.registerSuccess
})
const mapDispatchToProps = dispatch => bindActionCreators({ signup }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Register)
