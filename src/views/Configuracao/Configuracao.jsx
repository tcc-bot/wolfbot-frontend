import React, { Component } from 'react'
import { Row, Col, Card, CardHeader, CardBody, InputGroup, Label, Button } from 'reactstrap'

import Alerts from '../../components/ui/Alerts'
import Input from '../../components/ui/Input'
import SelectExchanges from './screens/SelectExchanges'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { salvarConfiguracao } from '../../_actions/ConfiguracaoActions'
import FormEstrategia from './screens/FormEstrategia'
import PropTypes from 'prop-types'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

class Configuracao extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  onSubmit (values) {
    const { salvarConfiguracao } = this.props
    const post = {
      key: values.key,
      secret: values.secret,
      id_exchange: this.props.exchangeSelected.id_exchange,
      nome_exchange: this.props.exchangeSelected.label,
      id_usuario: this.props.user.id,
      nome_usuario: this.props.user.nome
    }
    salvarConfiguracao(post)
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <div className='animated fadeIn'>
        <Row>
          <div>
            <Alerts />
          </div>
          <Col xs='11' lg='11' sm='11'>
            <Card className='card card card-style'>
              <CardHeader className='card-header-style'>
                <a><i className='icon-settings' /> Configuração</a>
              </CardHeader>
              <CardBody>
                <div className={PropTypes.object.isRequired.root}>
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      style={{ backgroundColor: '#192024' }}
                      expandIcon={<ExpandMoreIcon />}>
                      <Typography className={PropTypes.object.isRequired.heading}>
                        <a class='text-white'><i className='fa fa-check-circle fa-2x text-success' style={{ textAlign: 'center;' }} />&nbsp;&nbsp;&nbsp;Integre com sua exchange</a>
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className='card-style'>
                      <div style={{ width: '100%' }}>
                        <br />
                        <form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
                          <InputGroup className='mb-3'>
                            <Col lg='2'>
                              <Label >
                                <h6>Exchange: </h6>
                              </Label>
                            </Col>
                            <Col>
                              <SelectExchanges />
                            </Col>
                          </InputGroup>
                          <InputGroup className='mb-3'>
                            <Col lg='2'>
                              <Label>
                                <h6>API Key:</h6>
                              </Label>
                            </Col>
                            <Col>
                              <Field component={Input} type='text' name='key' placeholder='ApiKey' className='form-control' />
                            </Col>
                          </InputGroup>
                          <InputGroup className='mb-3'>
                            <Col lg='2'>
                              <Label>
                                <h6>API Secret:</h6>
                              </Label>
                            </Col>
                            <Col>
                              <Field component={Input} type='text' name='secret' placeholder='ApiSecret' className='form-control' />
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
                      </div>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      style={{ backgroundColor: '#192024' }}
                      expandIcon={<ExpandMoreIcon />}>
                      <Typography className={PropTypes.object.isRequired.heading}>
                        <a class='text-white'><i className='fa fa-exclamation-circle fa-2x text-danger' style={{ textAlign: 'center;' }} />&nbsp;&nbsp;&nbsp;Defina sua estratégia</a>
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className='card-style'>
                      <div style={{ width: '100%' }}>
                        <br />
                        <FormEstrategia />
                      </div>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}

Configuracao = reduxForm({ form: 'formConfig' })(Configuracao)
const mapDispatchToProps = dispatch => bindActionCreators({ salvarConfiguracao }, dispatch)
const mapStateToProps = state => ({
  exchangeSelected: state.selectConfig.exchangeSelected,
  user: state.auth.user
})
export default connect(mapStateToProps, mapDispatchToProps)(Configuracao)
