import React, { Component } from 'react'
import { Row, Col, InputGroup, Label, Button } from 'reactstrap'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Input from '../../../components/ui/Input'
import Select from '../../../components/ui/Select'

import { salvarEstrategia } from '../../../_actions/ConfiguracaoActions'

class Estrategia extends Component {
  constructor (props) {
    super(props)
  }

  onSubmit (values) {
    salvarEstrategia(values)
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
        <InputGroup className='mb-2'>
          <Col lg='1'>
            <Label >
              Periodos:
            </Label>
          </Col>
          <Col md='2'>
            <Select
              actionSelected={'PERIODO_SELECTED'}
              dados={this.props.select.periodos}
            />
          </Col>
          <Col lg='1'>
            <Label>
              <p>Tamanho Candle:</p>
            </Label>
          </Col>
          <Col md='2'>
            <Select
              actionSelected={'CANDLE_SELECTED'}
              dados={this.props.select.candles}
            />
          </Col>
          <Col lg='1'>
            <Label>
              <p>Moeda:</p>
            </Label>
          </Col>
          <Col md='3'>
            <Select
              actionSelected={'MOEDA_SELECTED'}
              dados={this.props.select.moedas}
            />
          </Col>
        </InputGroup>
        <br />
        <InputGroup className='mb-3'>
          <Col lg='1'>
            <Label>
              <p>Indicador:</p>
            </Label>
          </Col>
          <Col md='2'>
            <Select
              actionSelected={'INDICADOR_SELECTED'}
              dados={this.props.select.indicadores}
            />
          </Col>
          <Col lg='1'>
            <Label>
              <p>Long Period:</p>
            </Label>
          </Col>
          <Col md='2'>
            <Field component={Input} type='text' name='longPeriod' className='form-control' />
          </Col>
          <Col lg='1'>
            <Label>
              <p>Short Period:</p>
            </Label>
          </Col>
          <Col md='2'>
            <Field component={Input} type='text' name='shortPeriod' className='form-control' />
          </Col>
          <Col lg='1'>
            <Label>
              <p>Signal Period:</p>
            </Label>
          </Col>
          <Col md='2'>
            <Field component={Input} type='text' name='signalPeriod' className='form-control' />
          </Col>
        </InputGroup>
        <br />
        <InputGroup className='mb-3'>
          <Col lg='1'>
            <Label>
              <p>Invervalo:</p>
            </Label>
          </Col>
          <Col md='2'>
            <Field component={Input} type='text' name='intervalo' className='form-control' />
          </Col>
        </InputGroup>
        <br />
        <Row>
          <Col xs='8'>
            <Button type='submit' className='btn-outline-success' style={{ marginRight: '5px' }}>Salvar Estratégia</Button>
            <Button type='submit' className='btn-outline-primary' style={{ marginRight: '5px' }}>Editar</Button>
            <Button type='submit' className='btn-outline-danger'>Cancelar</Button>
          </Col>
        </Row>
        <hr />
      </form>
    )
  }
}

Estrategia = reduxForm({ form: 'formEstrategia' })(Estrategia)
const mapDispatchToProps = dispatch => bindActionCreators({ salvarEstrategia }, dispatch)
const mapStateToProps = state => ({
  user: state.auth.user,
  select: state.configuracao
})
export default connect(mapStateToProps, mapDispatchToProps)(Estrategia)
