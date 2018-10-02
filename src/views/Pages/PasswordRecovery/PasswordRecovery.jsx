import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom';

import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { passwordRecovery } from '../../../_actions/authActions'
import Input from '../../../containers/Components/Input'
import Alerts from '../../../containers/Components/Alerts'

class PasswordRecovery extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onSubmit(values) {
    const { passwordRecovery } = this.props
    passwordRecovery(values)
  }
  componentWillMount() {
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div className="app flex-row align-items-center ComponentAuth">
        <Alerts />
        <Container className='ContainerAuth'>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card id="cardLogin" className="card p-4">
                  <CardBody>
                    <h1>Esqueceu sua senha?</h1>
                    <p className="text-muted">Digite seu nome de usuário ou e-mail e nós lhe enviaremos as instruções para redefinir sua senha.</p>
                    <form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field component={Input} type="email" name="email" placeholder="Email" className="form-control" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button type="submit" className="btn-outline-primary">Enviar</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Link to="/login"><Button color="link" className="px-0">Voltar</Button></Link>
                        </Col>
                      </Row>
                    </form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
        {this.props.redirectPageEmailSucess ? <Redirect from="/" to="/emailsendpasswordrecovery" /> : null }
      </div >
    );
  }
}

PasswordRecovery = reduxForm({ form: 'authForm' })(PasswordRecovery)

const mapStateToProps = (state) => ({
  redirectPageEmailSucess: state.auth.passwordRecovery
})
const mapDispatchToProps = dispatch => bindActionCreators({ passwordRecovery }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PasswordRecovery)
