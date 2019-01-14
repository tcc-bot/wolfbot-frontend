import React, { Component } from 'react'
import { Row, Col, InputGroup, Label, Button } from 'reactstrap'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Input from '../../../components/ui/Input'
import Select from '../../../components/ui/Select'

import { getExchanges, salvarConfiguracao } from '../../../_actions/ConfiguracaoActions'

class ExchangeIntegracao extends Component {
  constructor (props) {
    super(props)
  }

  onSubmit (values) {
    const { salvarConfiguracao } = this.props

    const post = {
      api_key: values.key,
      secret: values.secret,
      id_exchange: this.props.exchangeSelected.id_exchange,
      exchange: this.props.exchangeSelected.label,
      user: {
        user_id: this.props.user.id,
        user_name: 'Allyson Andrade'// this.props.user.nome
      }
    }

    salvarConfiguracao(post)
  }

  componentWillMount () {
    this.props.getExchanges()
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
        <InputGroup className='mb-3'>
          <Col lg='2'>
            <Label >
              <p>Exchange: </p>
            </Label>
          </Col>
          <Col>
            <Select
              dados={this.props.exchanges}
              actionSelected={'EXCHANGE_SELECTED'}
            />
          </Col>
        </InputGroup>
        <InputGroup className='mb-3'>
          <Col lg='2'>
            <Label>
              <p>API Key:</p>
            </Label>
          </Col>
          <Col>
            <Field component={Input} type='text' name='key' placeholder='Api Key' className='form-control' />
          </Col>
        </InputGroup>
        <InputGroup className='mb-3'>
          <Col lg='2'>
            <Label>
              <p>API Secret:</p>
            </Label>
          </Col>
          <Col>
            <Field component={Input} type='text' name='secret' placeholder='Api Secret' className='form-control' />
          </Col>
        </InputGroup>
        <br />
        <Row>
          <Col xs='8'>
            <Button type='submit' className='btn-outline-success' style={{ marginRight: '5px' }}>Salvar</Button>
            <Button type='submit' className='btn btn-outline-primary' style={{ marginRight: '5px' }}>Editar</Button>
            <Button type='submit' className='btn-outline-danger'>Cancelar</Button>
          </Col>
        </Row>
        <hr />
      </form>
    )
  }
}

ExchangeIntegracao = reduxForm({ form: 'formExchange' })(ExchangeIntegracao)
const mapDispatchToProps = dispatch => bindActionCreators({
  getExchanges,
  salvarConfiguracao
},
dispatch)
const mapStateToProps = state => ({
  user: state.auth.user,
  exchanges: state.configuracao.exchanges,
  exchangeSelected: state.configuracao.exchangeSelected
})
export default connect(mapStateToProps, mapDispatchToProps)(ExchangeIntegracao)
