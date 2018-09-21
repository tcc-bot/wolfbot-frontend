import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, InputGroup, Label, Button } from 'reactstrap';
import Input from '../../../containers/Components/Input'
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
      <div className="animated fadeIn">
        <Row>
          <Col xs="9" lg="9" sm="9">
            <Card className="card card-style">
              <CardHeader>
                <i className="icon-settings"></i> Estratégia
              </CardHeader>
              <CardBody>
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
                        <h6>Tamanho Candle:</h6>
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
                        <h6>Moeda:</h6>
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
                        <h6>Indicador:</h6>
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
                        <h6>Long Period:</h6>
                      </Label>
                    </Col>
                    <Col md='2'>
                      <Field component={Input} type="text" name="longPeriod" className="form-control" />
                    </Col>
                    <Col lg="1">
                      <Label>
                        <h6>Short Period:</h6>
                      </Label>
                    </Col>
                    <Col md='2'>
                      <Field component={Input} type="text" name="shortPeriod" className="form-control" />
                    </Col>
                    <Col lg="1">
                      <Label>
                        <h6>Signal Period:</h6>
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
                        <h6>Invervalo:</h6>
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
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" lg="3" sm="3">
            <Card className="card card card-style">
              <CardHeader>
                Passo 2
              </CardHeader>
              <CardBody>
                <div className="col-lg-9">
                  <i className='fa fa-exclamation-circle fa-3x text-danger' style={{ textAlign: 'center;' }}></i>
                </div>
                <br />
                Defina sua estratégia ídeal para que robô começe a trabalhar.
              </CardBody>
            </Card>
          </Col>
        </Row >
      </div>
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
