import React, { Component } from 'react';
import { Row, Col, InputGroup, Label, Button } from 'reactstrap';
import Input from '../../../components/ui/Input';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import functions from '../../../helpers/functions';

import { alterarSenha, validaAlteraçãoSenha, resetAlteracaoSenha } from '../../../_actions/PerfilActions';

class AlterarSenha extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: functions.loadLocalStorage('user_bot')
    }
  }

  onSubmit(data) {
    this.props.validaAlteraçãoSenha(data);
    if (this.props.changePasswordSuccess) {
      this.props.reset();
      this.props.alterarSenha(data, this.state.user.Token);
    }
  }

  componentWillMount() {
    this.props.resetAlteracaoSenha();
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <div style={{ width: '100%' }}>
        <br />
        <div style={{ width: '80%', margin: 'auto', color: '#FFFFFF' }}>
          <form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
            <InputGroup className='mb-3'>
              <Col lg='3'>
                <Label >
                  <h6 style={{ color: '#C0C6CD' }}>Senha Atual:</h6>
                </Label>
              </Col>
              <Col md='10'>
                <Field component={Input} type='password' name='password' className='form-control' />
                <small style={{ color: 'red' }}>{!this.props.changePasswordSuccess ? this.props.passwordIsEmpty : ''}</small>
              </Col>
            </InputGroup>
            <InputGroup className='mb-3'>
              <Col lg='3'>
                <Label>
                  <h6 style={{ color: '#C0C6CD' }}>Nova Senha:</h6>
                </Label>
              </Col>
              <Col md='10'>
                <Field component={Input} type='password' name='newPassword' className='form-control' />
                <small style={{ color: 'red' }}>{!this.props.changePasswordSuccess ? this.props.newPasswordIsEmpty : ''}</small>
              </Col>
            </InputGroup>
            <InputGroup className='mb-3'>
              <Col lg='3'>
                <Label>
                  <h6 style={{ color: '#C0C6CD' }}>Confirmação da Nova Senha:</h6>
                </Label>
              </Col>
              <Col md='10'>
                <Field component={Input} type='password' name='confirmNewPassword' className='form-control' />
                <small style={{ color: 'red' }}>{!this.props.changePasswordSuccess ? this.props.confirmNewPasswordIsEmpty : ''}</small>
              </Col>
            </InputGroup>
            <Row>
              <Button type='submit' className='btn-success' style={{ margin: 'auto' }}>Alterar senha</Button>
            </Row>
          </form>
        </div>
      </div>
    )
  }
}

AlterarSenha = reduxForm(
  {
    form: 'formAlteraçãoSenha',
  },
)(AlterarSenha)
const mapDispatchToProps = dispatch => bindActionCreators({
  alterarSenha,
  validaAlteraçãoSenha,
  resetAlteracaoSenha
}, dispatch)
const mapStateToProps = state => ({
  passwordIsEmpty: state.profile.passwordIsEmpty,
  newPasswordIsEmpty: state.profile.newPasswordIsEmpty,
  confirmNewPasswordIsEmpty: state.profile.confirmNewPasswordIsEmpty,
  changePasswordSuccess: state.profile.changePasswordSuccess
})
export default connect(mapStateToProps, mapDispatchToProps)(AlterarSenha)
