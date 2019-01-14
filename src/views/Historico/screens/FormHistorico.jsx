import React, { Component } from 'react'
import { Row, Col, InputGroup, Label, Button } from 'reactstrap'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { buscarHistorico } from '../../../_actions/HistoricoActions'
import Input from '../../../components/ui/Input'

class FormHistorico extends Component {
  constructor (props) {
    super(props)
  }

  onSubmit (values) {
    this.props.buscarHistorico(values)
  }

  render () {
    const { reset, handleSubmit } = this.props
    return (
      <Col xs='12' lg='12' sm='12'>
        <form className='row' onSubmit={handleSubmit((v) => this.onSubmit(v))}>
          <Col xs='12' sm='2'>
            <Label>Data da Operação</Label>
            <InputGroup className='lg-2 xs-12 sm-12'>
              <Field component={Input} type='date' name='dataInicio' placeholder='Data' className='form-control' />
            </InputGroup>
          </Col>
          <Col xs='12' sm='2'>
            <Label>Data da Operação</Label>
            <InputGroup className='mb-2 xs-12 sm-12'>
              <Field component={Input} type='date' name='dataFim' placeholder='Data' className='form-control' />
            </InputGroup>
          </Col>
          <Col xs='12' sm='2'>
            <Label>Ação Realizada</Label>
            <InputGroup className='mb-2'>
              <Field component={Input} type='text' name='acao' placeholder='Ação' className='form-control' />
            </InputGroup>
          </Col>
          <Col xs='12' sm='2'>
            <Label>Moeda</Label>
            <InputGroup className='mb-2'>
              <Field component={Input} type='text' name='moeda' placeholder='Moeda' className='form-control' />
            </InputGroup>
          </Col>
          <Col xs='12' sm='3'>
            <Label>Tipo de Operação</Label>
            <InputGroup className='mb-2'>
              <Field component={Input} type='text' name='operacao' placeholder='Operação' className='form-control' />
            </InputGroup>
          </Col>
          <Row style={{ margin: 'auto', marginBottom: '15px', marginTop: '10px' }}>
            <Col xs='12' sm='5'>
              <Button type='submit' className='btn-success'>Buscar</Button>
            </Col>
            <Col xs='12' sm='5'>
              <Button type='reset' className='btn-warning' onClick={reset}>Limpar</Button>
            </Col>
          </Row>
        </form>
      </Col >
    )
  }
}

FormHistorico = reduxForm({ form: 'formHistorico' })(FormHistorico)
const mapDispatchToProps = dispatch => bindActionCreators({ buscarHistorico }, dispatch)
const mapStateToProps = state => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(FormHistorico)
