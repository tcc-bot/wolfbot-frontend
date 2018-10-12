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
  Collapse,
  Popover,
  PopoverBody,
  Button
} from 'reactstrap'
import Input from '../../../components/ui/Input'
import Switch from 'react-switch'
import Select from 'react-select'
import classnames from 'classnames'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ConfigTeste extends Component {
  constructor (props) {
    super(props)

    this.handleChangeSwitchSellIndicator = this.handleChangeSwitchSellIndicator.bind(this);
    this.handleChangeSwitchStopLoss = this.handleChangeSwitchStopLoss.bind(this);
    this.toggle = this.toggle.bind(this)
    this.togglePopover = this.togglePopover.bind(this)
    this.state = {
      activeTab: '1',
      checkedSellIndicator: false,
      checkedStopLoss: false,
      popoverOpen: false,
      colapseMACD: false,
      colapseEMA: false

    }
  }

  onSubmit (values) {
    console.log(values)
    //salvarEstrategia(values)
  }

  handleChangeSwitchSellIndicator(checkedSellIndicator) {
    this.setState({ checkedSellIndicator });
  }
  handleChangeSwitchStopLoss(checkedStopLoss) {
    this.setState({ checkedStopLoss });
  }

  handleChange = (selectedOptions) => {
    this.setState({ selectedOptions })
    if(selectedOptions.value === 'MACD'){
      this.setState({ collapseMACD: !this.state.collapse })
    }else if(selectedOptions.value !== 'MACD'){
      this.setState({ collapseMACD: false })
    }
    if(selectedOptions.value === 'EMA'){
      this.setState({ collapseEMA: !this.state.collapse })
    }else if(selectedOptions.value !== 'EMA'){
      this.setState({ collapseEMA: false })
    }
  }

  toggle (tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  togglePopover() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render () {
    const { handleSubmit } = this.props
    const { selectedOption } = this.state
    const custonStyle = {
      control: styles => ({
        ...styles,
        backgroundColor: '#515b65',
        border: '1px solid #23282c'
      }),
      option: (styles, { isDisabled, isFocused, isSelected }) => {
        return {
          ...styles,
          backgroundColor: isDisabled ? '#515b65' : isSelected ? '#000000' : isFocused ? 'rgb(26, 36, 44)' : '#515b65',
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
                <form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
                <Row>
                  <InputGroup className='mb-3'>
                    <Col className='col-form-label text-right' lg='2'>
                      <Label>
                        <a href="javascript:;" className="a"><i className='icon-question' id="popover" onClick={this.togglePopover} color style={{color: '#20a8d8'}} /></a> Moeda:
                        <Popover placement="right" isOpen={this.state.popoverOpen} target="popover" togglePopover={this.togglePopover}>
                          <PopoverBody>Selecionar a moeda que será utilizada no backtest, a moeda base sempre será USDT.</PopoverBody>
                        </Popover>
                      </Label>
                    </Col>
                    <Col lg='8'>
                      <Select
                        onChange={this.handleChange}
                        options={this.props.backtest.currencies}
                        value={selectedOption}
                        styles={custonStyle}
                      />
                    </Col>
                  </InputGroup>
                  <InputGroup className='mb-3'>
                    <Col className='col-form-label text-right' lg='2'>
                      <Label>
                      <a href="javascript:;" className="a"><i className='icon-question' id="popover" onClick={this.togglePopover} color style={{color: '#20a8d8'}} /></a> Candle:
                        <Popover placement="right" isOpen={this.state.popoverOpen} target="popover" togglePopover={this.togglePopover}>
                          <PopoverBody>Selecionar a moeda que será utilizada no backtest, a moeda base sempre será USDT.</PopoverBody>
                        </Popover>
                      </Label>
                    </Col>
                    <Col lg='8'>
                      <Select
                        onChange={this.handleChange}
                        options={this.props.backtest.candle}
                        value={selectedOption}
                        styles={custonStyle}
                      />
                    </Col>
                  </InputGroup>
                  <InputGroup className='mb-3'>
                    <Col className='col-form-label text-right' lg='2'>
                      <Label>
                      <a href="javascript:;" className="a"><i className='icon-question' id="popover" onClick={this.togglePopover} color style={{color: '#20a8d8'}} /></a> Indicador:
                        <Popover placement="right" isOpen={this.state.popoverOpen} target="popover" togglePopover={this.togglePopover}>
                          <PopoverBody>Selecionar a moeda que será utilizada no backtest, a moeda base sempre será USDT.</PopoverBody>
                        </Popover>
                      </Label>
                    </Col>
                    <Col lg='8'>
                      <Select
                        onChange={this.handleChange}
                        options={this.props.backtest.indicators}
                        value={selectedOption}
                        styles={custonStyle}
                      />
                    </Col>
                    <Col className="offset-md-2" lg="8">
                    <Collapse isOpen={this.state.collapseMACD}>
                      <Card>
                        <CardBody>
                          <InputGroup>
                            <Col className='col-form-label text-right' lg='2'>
                              <Label>
                                <h6>MACD LongPeriod:</h6>
                              </Label>
                            </Col>
                            <Col lg='6'>
                              <Field component={Input} type='text' name='macdLongPeriod' className='form-control' placeholder="26" />
                            </Col>
                          </InputGroup>
                          <InputGroup>
                            <Col className='col-form-label text-right' lg='2'>
                              <Label>
                                <h6>MACD FastPeriod:</h6>
                              </Label>
                            </Col>
                            <Col lg='6'>
                              <Input type='text' name='macdFastPeriod' className='form-control' placeholder="12" />
                            </Col>
                          </InputGroup>
                          <InputGroup>
                            <Col className='col-form-label text-right' lg='2'>
                              <Label>
                                <h6>MACD SignalPeriod:</h6>
                              </Label>
                            </Col>
                            <Col lg='6'>
                              <Input type='text' name='macdSignalPeriod' className='form-control' placeholder="9" />
                            </Col>
                          </InputGroup>
                        </CardBody>
                      </Card>
                    </Collapse>
                    <Collapse isOpen={this.state.collapseEMA}>
                      <Card>
                        <CardBody>
                          <InputGroup>
                            <Col className='col-form-label text-right' lg='2'>
                              <Label>
                                <h6>EMA Period:</h6>
                              </Label>
                            </Col>
                            <Col lg='6'>
                              <Input type='text' name='macdLongPeriod' className='form-control' placeholder="5" />
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
                      <a href="javascript:;" className="a"><i className='icon-question' id="popover" onClick={this.togglePopover} color style={{color: '#20a8d8'}} /></a> Venda pelo Indicador:
                        <Popover placement="right" isOpen={this.state.popoverOpen} target="popover" togglePopover={this.togglePopover}>
                          <PopoverBody>Selecionar a moeda que será utilizada no backtest, a moeda base sempre será USDT.</PopoverBody>
                        </Popover>
                      </Label>
                    </Col>
                    <Col lg='3' >
                      <Switch
                        checked={this.state.checkedSellIndicator}
                        onChange={this.handleChangeSwitchSellIndicator}
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
                      <a href="javascript:;" className="a"><i className='icon-question' id="popover" onClick={this.togglePopover} color style={{color: '#20a8d8'}} /></a> Lucro:
                        <Popover placement="right" isOpen={this.state.popoverOpen} target="popover" togglePopover={this.togglePopover}>
                          <PopoverBody>Selecionar a moeda que será utilizada no backtest, a moeda base sempre será USDT.</PopoverBody>
                        </Popover>
                      </Label>
                    </Col>
                    <Col lg='8'>
                      <Input type='text' name='profit' className='form-control' />
                    </Col>
                  </InputGroup>
                  <InputGroup className='mb-3'>
                    <Col className='col-form-label text-right' lg='2'>
                      <Label>
                      <a href="javascript:;" className="a"><i className='icon-question' id="popover" onClick={this.togglePopover} color style={{color: '#20a8d8'}} /></a> Stop-Loss:
                        <Popover placement="right" isOpen={this.state.popoverOpen} target="popover" togglePopover={this.togglePopover}>
                          <PopoverBody>Selecionar a moeda que será utilizada no backtest, a moeda base sempre será USDT.</PopoverBody>
                        </Popover>
                      </Label>
                    </Col>
                    <Col lg='3' >
                      <Switch
                        checked={this.state.checkedStopLoss}
                        onChange={this.handleChangeSwitchStopLoss}
                        handleDiameter={25}
                        offColor='#f86c6b'
                        onColor='#4dbd74'
                        offHandleColor='#fff'
                        onHandleColor='#fff'
                        height={35}
                        width={60}
                        className='react-switch'
                        id='switch-stop-loss'
                      />
                    </Col>
                    <Col className="offset-md-2" lg="8">
                    <Collapse isOpen={this.state.checkedStopLoss}>
                      <Card>
                        <CardBody>
                          <InputGroup>
                            <Col className='col-form-label text-right' lg='2'>
                              <Label>
                                <h6>Percentual:</h6>
                              </Label>
                            </Col>
                            <Col lg='6'>
                              <Input type='text' name='percentualStopLoss' className='form-control' placeholder="0.1" />
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
                      <a href="javascript:;" className="a"><i className='icon-question' id="popover" onClick={this.togglePopover} color style={{color: '#20a8d8'}} /></a> Data Inicio:
                        <Popover placement="right" isOpen={this.state.popoverOpen} target="popover" togglePopover={this.togglePopover}>
                          <PopoverBody>Selecionar a moeda que será utilizada no backtest, a moeda base sempre será USDT.</PopoverBody>
                        </Popover>
                      </Label>
                    </Col>
                    <Col lg='8'>
                      <Input type='date' name='date-teste' className='form-control' />
                    </Col>
                  </InputGroup>
                  <InputGroup>
                    <Col>
                      <Button type='submit' className='btn-outline-success'>Testar</Button>
                    </Col>
                  </InputGroup>
                </Row>
                </form>
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
const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch)
const mapStateToProps = state => ({
  backtest: state.backtest
})
export default connect(mapStateToProps, mapDispatchToProps)(ConfigTeste)
