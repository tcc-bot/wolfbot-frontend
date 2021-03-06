import React, { Component } from 'react'
import { Button, Card, CardBody, CardGroup, Col, Container, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap'
import { Redirect, Link } from 'react-router-dom'

import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as qs from 'query-string'

import { loadChangePasswordPage, changePassword } from '../../../_actions/authActions'
import Input from '../../../components/ui/Input'
import Alerts from '../../../components/ui/Alerts'

class ChangePassword extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.changePasswordHash = qs.parse(this.props.location.search).parameter
  }

  onSubmit (values) {
    this.props.changePassword(values, this.props.changePasswordHash)
  }

  componentDidMount () {
    this.props.loadChangePasswordPage(this.changePasswordHash)
  }

  render () {
    if (this.props.redirect === false) {
      window.location.reload()
    }
    const { handleSubmit, reset } = this.props
    if (this.props.redirect) {
      return (
        <div className='app flex-row align-items-center ComponentAuth'>
          <Alerts />
          <Container className='ContainerAuth'>
            <Row className='justify-content-center'>
              <Col md='8'>
                <CardGroup>
                  <Card id='cardLogin' className='card p-4'>
                    <CardBody>
                      <h1>Alteração da Senha</h1>
                      <p className='text-muted'>Insira a nova senha para a sua conta</p>
                      <form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
                        <InputGroup className='mb-4'>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='icon-lock' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Field component={Input} type='password' name='password' placeholder='Senha' className='form-control' />
                        </InputGroup>
                        <InputGroup className='mb-4'>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='icon-lock' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Field component={Input} type='password' name='passwordConfirm' placeholder='Senha de Confirmação' className='form-control' />
                        </InputGroup>
                        <Row>
                          <Col xs='8'>
                            <Button type='submit' className='btn-outline-primary'><Link from='/changePassword' to='/dashboard' />Salvar Alterações</Button>
                            <Button type='reset' onClick={reset} className='btn-outline-warning'>Limpar</Button>
                          </Col>
                        </Row>
                      </form>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
          {this.props.passwordChanged ? <Redirect from='/' to='/passwordChanged' /> : null}
        </div >
      )
    } else {
      return (<Redirect from='/' to='/login' />)
    }
  }
}

ChangePassword = reduxForm({ form: 'authForm' })(ChangePassword)

const mapStateToProps = (state) => ({
  redirect: state.auth.changePasswordPermition,
  changePasswordHash: state.auth.changePasswordHash,
  passwordChanged: state.auth.passwordChanged
})
const mapDispatchToProps = dispatch => bindActionCreators({ loadChangePasswordPage, changePassword }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)
