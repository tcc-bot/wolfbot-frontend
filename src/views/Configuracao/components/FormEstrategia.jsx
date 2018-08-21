import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, InputGroup, Label, Button } from 'reactstrap';
import Input from '../../../containers/components/Input'
import Select from 'react-select'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { salvarEstrategia } from '../ConfiguracaoActions'

class FormEstrategia extends Component {
  constructor(props) {
    super(props);

  }

  onSubmit(values) {

    salvarEstrategia(values)
  }

  render() {
    const indicadores = [
      {
        "value": "MACD",
        "label": "MACD"
      }]

    const moedas = [
      {
        "value": "BTC/USDT",
        "label": "BTC/USDT"
      }
    ]
    const candle = [
      {
        "value": "5m",
        "label": "5m"
      }
      , {
        "value": "10m",
        "label": "10m"
      }
      , {
        "value": "15m",
        "label": "15m"
      }
      , {
        "value": "30m",
        "label": "30m"
      }
      , {
        "value": "1h",
        "label": "1h"
      }
      , {
        "value": "2h",
        "label": "2h"
      }
      , {
        "value": "5h",
        "label": "5h"
      }
      , {
        "value": "1d",
        "label": "1d"
      }
    ]
    const periodo = [
      {
        "value": "50",
        "label": "50"
      }
    ]
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
      <CardBody>
        <form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
          <InputGroup className="mb-3">
            <Col lg="1">
              <Label >
                <h6>Periodos</h6>
              </Label>
            </Col>
            <Col md='4'>
              <Select
                onChange={this.handleChange}
                options={periodo}
                value={periodo[0]}
                styles={custonStyle}
                name="periodo"
              />
            </Col>
            <Col lg="1">
              <Label>
                <h6>Tamanho Candle</h6>
              </Label>
            </Col>
            <Col md='6'>
              <Select
                onChange={this.handleChange}
                options={candle}
                value={candle[0]}
                styles={custonStyle}
                name="candle"
              />
            </Col>
          </InputGroup>
          <InputGroup className="mb-3">
            <Col lg="1">
              <Label>
                <h6>Moeda</h6>
              </Label>
            </Col>
            <Col md='4'>
              <Select
                onChange={this.handleChange}
                options={moedas}
                value={moedas[0]}
                styles={custonStyle}
                name="moeda"
              />
            </Col>
            <Col lg="1">
              <Label>
                <h6>Indicador</h6>
              </Label>
            </Col>
            <Col md='6'>
              <Select
                onChange={this.handleChange}
                options={indicadores}
                value={indicadores[0]}
                styles={custonStyle}
                name="indicador"
              />
            </Col>
          </InputGroup>
          <InputGroup className="mb-3">
            <Col lg="1">
              <Label>
                <h6>LongPeriod</h6>
              </Label>
            </Col>
            <Col md='2'>
              <Field component={Input} type="text" name="longPeriod" className="form-control" />
            </Col>
            <Col lg="1">
              <Label>
                <h6>ShortPeriod</h6>
              </Label>
            </Col>
            <Col md='2'>
              <Field component={Input} type="text" name="shortPeriod" className="form-control" />
            </Col>
            <Col lg="1">
              <Label>
                <h6>SignalPeriod</h6>
              </Label>
            </Col>
            <Col md='2'>
              <Field component={Input} type="text" name="signalPeriod" className="form-control" />
            </Col>
            <Col lg="1">
              <Label>
                <h6>Invervalo</h6>
              </Label>
            </Col>
            <Col md='2'>
              <Field value={"Teste"} id='intervalo' component={Input} type="text" name="intervalo" className="form-control" />
            </Col>
          </InputGroup>
          <Row>
            <Col lg="1">
              <Button type="submit" className="btn-outline-success">Salvar Estratégia</Button>
            </Col>
          </Row>
          <hr />
        </form>
      </CardBody>
    );
  }
}

FormEstrategia = reduxForm({ form: 'formEstrategia' })(FormEstrategia)
const mapDispatchToProps = dispatch => bindActionCreators({ salvarEstrategia }, dispatch)
const mapStateToProps = state => ({
  user: state.auth.user
})
export default connect(mapStateToProps, mapDispatchToProps)(FormEstrategia)
