import React, { Component } from 'react'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Label,
  Card,
  CardHeader,
  CardBody,
  InputGroup,
  Row,
  Col,
  Collapse
} from 'reactstrap'
import Input from '../../../components/ui/Input'
import Switch from 'react-switch'
import Select from 'react-select'
import classnames from 'classnames'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'

class ConfigTeste extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: '1',
      colapseMACD: false,
      colapseEMA: false
    }
  }

  handleChange = (selectedOptions) => {
    this.setState({ selectedOptions })
    if(selectedOptions.value === 'MACD'){
      this.setState({ collapseMACD: !this.state.collapse })
    }else if(selectedOptions.value === 'EMA'){
      this.setState({ collapseEMA: !this.state.collapse })
    }
  }

  toggle (tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  render () {
    const { selectedOption } = this.state
    return (
      <Col xs='12' lg='12' sm='6'>
        <Card className='card-style card' xs='3' lg='12' sm='6'>
          <CardHeader className='card-header-style'>
            <i className='icon-equalizer' /> Testar Estratégia
          </CardHeader>
          <CardBody>
            <Nav className='nav-tabs' >
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  className='nav-item'
                  onClick={() => { this.toggle('1') }}
                > Estratégia
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  className='nav-item'
                  onClick={() => { this.toggle('2') }}
                > Resultados
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId='1'>
                <Row>
                  <InputGroup className='mb-3'>
                    <Col className='col-form-label text-right' lg='2'>
                      <Label>
                        <h6>Moeda:</h6>
                      </Label>
                    </Col>
                    <Col lg='8'>
                      <Select
                        onChange={this.handleChange}
                        options={this.props.backtest.currencies}
                        value={selectedOption}
                      />
                    </Col>
                  </InputGroup>
                  <InputGroup className='mb-3'>
                    <Col className='col-form-label text-right' lg='2'>
                      <Label>
                        <h6>Candle:</h6>
                      </Label>
                    </Col>
                    <Col lg='8'>
                      <Select
                        onChange={this.handleChange}
                        options={this.props.backtest.candle}
                        value={selectedOption}
                      />
                    </Col>
                  </InputGroup>
                  <InputGroup className='mb-3'>
                    <Col className='col-form-label text-right' lg='2'>
                      <Label>
                        <h6>Indicador:</h6>
                      </Label>
                    </Col>
                    <Col lg='8'>
                      <Select
                        onChange={this.handleChange}
                        options={this.props.backtest.indicators}
                        value={selectedOption}
                      />
                    </Col>
                    <Col className="offset-md-2" lg="8">
                    <Collapse isOpen={this.state.collapseMACD}>
                      <Card>
                        <CardBody>
                          <InputGroup>
                            <Col className='col-form-label' lg='2'>
                              <Label>
                                <h6>MACD LongPeriod:</h6>
                              </Label>
                            </Col>
                            <Col lg='6'>
                              <Input type='text' name='macdLongPeriod' className='form-control' />
                            </Col>
                          </InputGroup>
                          <InputGroup>
                            <Col className='col-form-label' lg='2'>
                              <Label>
                                <h6>MACD FastPeriod:</h6>
                              </Label>
                            </Col>
                            <Col lg='6'>
                              <Input type='text' name='macdFastPeriod' className='form-control' />
                            </Col>
                          </InputGroup>
                          <InputGroup>
                            <Col className='col-form-label' lg='2'>
                              <Label>
                                <h6>MACD SignalPeriod:</h6>
                              </Label>
                            </Col>
                            <Col lg='6'>
                              <Input type='text' name='macdSignalPeriod' className='form-control' />
                            </Col>
                          </InputGroup>
                        </CardBody>
                      </Card>
                    </Collapse>
                    <Collapse isOpen={this.state.collapseEMA}>
                      <Card>
                        <CardBody>
                          <InputGroup>
                            <Col className='col-form-label' lg='2'>
                              <Label>
                                <h6>MACD LongPeriod:</h6>
                              </Label>
                            </Col>
                            <Col lg='6'>
                              <Input type='text' name='macdLongPeriod' className='form-control' />
                            </Col>
                          </InputGroup>
                          <InputGroup>
                            <Col className='col-form-label' lg='2'>
                              <Label>
                                <h6>MACD FastPeriod:</h6>
                              </Label>
                            </Col>
                            <Col lg='6'>
                              <Input type='text' name='macdFastPeriod' className='form-control' />
                            </Col>
                          </InputGroup>
                          <InputGroup>
                            <Col className='col-form-label' lg='2'>
                              <Label>
                                <h6>MACD SignalPeriod:</h6>
                              </Label>
                            </Col>
                            <Col lg='6'>
                              <Input type='text' name='macdSignalPeriod' className='form-control' />
                            </Col>
                          </InputGroup>
                        </CardBody>
                      </Card>
                    </Collapse>
                    </Col>
                  </InputGroup>
                  <InputGroup className='mb-3'>
                    <Col className='col-form-label text-right' lg='2'>
                      <Label>
                        <h6>Sell Indicador:</h6>
                      </Label>
                    </Col>
                    <Col lg='3' >
                      <Switch
                        // checked={this.props.roboLigado}
                        // onChange={() => this.props.ligarRobo(this.props.roboLigado)}
                        handleDiameter={25}
                        offColor='#f86c6b'
                        onColor='#4dbd74'
                        offHandleColor='#fff'
                        onHandleColor='#fff'
                        height={35}
                        width={60}
                        className='react-switch'
                        id='switch-sell-indicator'
                      />
                    </Col>
                  </InputGroup>
                  <InputGroup className='mb-3'>
                    <Col className='col-form-label text-right' lg='2'>
                      <Label>
                        <h6>Profit:</h6>
                      </Label>
                    </Col>
                    <Col lg='8'>
                      <Input type='text' name='profit' className='form-control' />
                    </Col>
                  </InputGroup>
                  <InputGroup className='mb-3'>
                    <Col className='col-form-label text-right' lg='2'>
                      <Label>
                        <h6>Stop-loss:</h6>
                      </Label>
                    </Col>
                    <Col lg='3' >
                      <Switch
                        // checked={this.props.roboLigado}
                        // onChange={() => this.props.ligarRobo(this.props.roboLigado)}
                        handleDiameter={25}
                        offColor='#f86c6b'
                        onColor='#4dbd74'
                        offHandleColor='#fff'
                        onHandleColor='#fff'
                        height={35}
                        width={60}
                        className='react-switch'
                        id='switch-sell-indicator'
                      />
                    </Col>
                  </InputGroup>
                  <InputGroup className='mb-3'>
                    <Col className='col-form-label text-right' lg='2'>
                      <Label>
                        <h6>Data Inicio:</h6>
                      </Label>
                    </Col>
                    <Col lg='8'>
                      <Input type='date' name='date-teste' className='form-control' />
                    </Col>
                  </InputGroup>
                </Row>
              </TabPane>
              <TabPane tabId='2'>
                <Row />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card >
      </Col>
    )
  }
}


ConfigTeste = reduxForm({ form: 'formBacktest' })(ConfigTeste)
//const mapDispatchToProps = dispatch => bindActionCreators({ salvarEstrategia }, dispatch)
const mapStateToProps = state => ({
  backtest: state.backtest
})
export default connect(mapStateToProps)(ConfigTeste)
