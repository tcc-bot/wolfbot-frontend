import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, InputGroup, Label, Button } from 'reactstrap';
import Input from '../../../containers/Components/Input'
import Select from 'react-select'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { salvarEstrategia } from '../../../actions/ConfiguracaoActions'

class FormEstrategia extends Component {
  constructor(props) {
    super(props);

  }

  onSubmit(values) {

    salvarEstrategia(values)
  }

  render() {

    const { handleSubmit } = this.props
    const custonStyle = {
      control: styles => ({
        ...styles,
        backgroundColor: '#515b65',
        border: '1px solid #23282c'
      }),
      option: (styles, { isDisabled, isFocused, isSelected }) => {
        return {
          ...styles,
          backgroundColor: isDisabled ? '#515b65' : isSelected ? '#343b41' : isFocused ? 'rgb(26, 36, 44)' : '#515b65',
          color: isDisabled ? '#000' : isSelected ? '#e4e7ea' : null,
          cursor: isDisabled ? 'not-allowed' : 'default',
        };
      },
      input: styles => ({
        ...styles,
        color: '#e4e7ea',
      }),
      placeholder: styles => ({
        ...styles,
        color: '#e4e7ea'
      }),
      singleValue: styles => ({
        ...styles,
        color: '#e4e7ea'
      })
    };
    return (
      <form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
        <InputGroup className="mb-2">
          <Col lg="1">
            <Label >
              <h6>Periodos:</h6>
            </Label>
          </Col>
          <Col md="2">
            <Select
              onChange={this.handleChange}
              options={this.props.select.periodos}
              value={this.props.select.periodos[0]}
              styles={custonStyle}
              name="periodo"
            />
          </Col>
          <Col lg="1">
            <Label>
              <p>Tamanho Candle:</p>
            </Label>
          </Col>
          <Col md='2'>
            <Select
              onChange={this.handleChange}
              options={this.props.select.candles}
              value={this.props.select.candles[0]}
              styles={custonStyle}
              name="candle"
            />
          </Col>
          <Col lg="1">
            <Label>
              <p>Moeda:</p>
            </Label>
          </Col>
          <Col md='3'>
            <Select
              onChange={this.handleChange}
              options={this.props.select.moedas}
              value={this.props.select.moedas[0]}
              styles={custonStyle}
              name="moeda"
            />
          </Col>
        </InputGroup>
        <br />
        <InputGroup className="mb-3">
          <Col lg="1">
            <Label>
              <p>Indicador:</p>
            </Label>
          </Col>
          <Col md='2'>
            <Select
              onChange={this.handleChange}
              options={this.props.select.indicadores}
              value={this.props.select.indicadores[0]}
              styles={custonStyle}
              name="indicador"
            />
          </Col>
          <Col lg="1">
            <Label>
              <p>Long Period:</p>
            </Label>
          </Col>
          <Col md='2'>
            <Field component={Input} type="text" name="longPeriod" className="form-control" />
          </Col>
          <Col lg="1">
            <Label>
              <p>Short Period:</p>
            </Label>
          </Col>
          <Col md='2'>
            <Field component={Input} type="text" name="shortPeriod" className="form-control" />
          </Col>
          <Col lg="1">
            <Label>
              <p>Signal Period:</p>
            </Label>
          </Col>
          <Col md='2'>
            <Field component={Input} type="text" name="signalPeriod" className="form-control" />
          </Col>
        </InputGroup>
        <br />
        <InputGroup className="mb-3">
          <Col lg="1">
            <Label>
              <p>Invervalo:</p>
            </Label>
          </Col>
          <Col md='2'>
            <Field value={"Teste"} id='intervalo' component={Input} type="text" name="intervalo" className="form-control" />
          </Col>
        </InputGroup>
        <br />
        <Row>
          <Col xs="8">
            <Button type="submit" className="btn-outline-success" style={{ marginRight: '5px' }}>Salvar Estratégia</Button>
            <Button type="submit" className="btn-outline-primary" style={{ marginRight: '5px' }}>Editar</Button>
            <Button type="submit" className="btn-outline-danger">Cancelar</Button>
          </Col>
        </Row>
        <hr />
      </form>
    );
  }
}

FormEstrategia = reduxForm({ form: 'formEstrategia' })(FormEstrategia)
const mapDispatchToProps = dispatch => bindActionCreators({ salvarEstrategia }, dispatch)
const mapStateToProps = state => ({
  user: state.auth.user,
  select: state.selectConfig
})
export default connect(mapStateToProps, mapDispatchToProps)(FormEstrategia)
