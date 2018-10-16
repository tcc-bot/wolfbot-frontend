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
  Button,
  Input
} from 'reactstrap'
import Switch from 'react-switch'
import Select from 'react-select'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toastr } from 'react-redux-toastr'
import { testarStrategy } from '../../../_actions/BacktestAction'

class ConfigTeste extends Component {
  constructor(props) {
    super(props)

    this.handlePeriodChange = this.handlePeriodChange.bind(this)
    this.handleLongPeriodChange = this.handleLongPeriodChange.bind(this)
    this.handleShortPeriodChange = this.handleShortPeriodChange.bind(this)
    this.handleSignalPeriodChange = this.handleSignalPeriodChange.bind(this)
    this.handleProfitChange = this.handleProfitChange.bind(this)
    this.handleStopChange = this.handleStopChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeSwitchSellIndicator = this.handleChangeSwitchSellIndicator.bind(this);
    this.toggle = this.toggle.bind(this)
    this.togglePopover = this.togglePopover.bind(this)
    this.state = {
      activeTab: '1',
      checkedSellIndicator: false,
      checkedStopLoss: false,
      popoverOpen: false,
      colapseMACD: false,
      colapseEMA: false,
      exchange: '',
      candle_size: '',
      name: '',
      period: '',
      long_period: '',
      short_period: '',
      signal_period: '',
      sellForIndicator: false,
      profit: '',
      stop: '',
      base_currency: 'USDT',
      target_currency: '',
      date: ''
    }
  }

  toggle(tab) {
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

  handleChangeExchange = (selectedOptions) => {
    this.setState({ selectedOptions })
    this.setState({ exchange: selectedOptions.value })
  }

  handleChangeCurrency = (selectedOptions) => {
    this.setState({ selectedOptions })
    this.setState({ target_currency: selectedOptions.value })
  }

  handleChangeCandle = (selectedOptions) => {
    this.setState({ selectedOptions })
    this.setState({ candle_size: selectedOptions.value })
  }

  handleChangeIndicator = (selectedOptions) => {
    this.setState({ selectedOptions })
    this.setState({name: selectedOptions.value })
    if (selectedOptions.value === 'MACD') {
      this.setState({ collapseMACD: !this.state.collapse })
    } else if (selectedOptions.value !== 'MACD') {
      this.setState({ collapseMACD: false })
    }
    if (selectedOptions.value === 'EMA') {
      this.setState({ collapseEMA: !this.state.collapse })
    } else if (selectedOptions.value !== 'EMA') {
      this.setState({ collapseEMA: false })
    }
  }

  handlePeriodChange(event) {
    this.setState({ period: event.target.value });
  }

  handleLongPeriodChange(event) {
    this.setState({ long_period: event.target.value });
  }

  handleShortPeriodChange(event) {
    this.setState({ short_period: event.target.value });
  }

  handleSignalPeriodChange(event) {
    this.setState({ signal_period: event.target.value });
  }

  handleChangeSwitchSellIndicator(checkedSellIndicator) {
    this.setState({ checkedSellIndicator })
    this.setState({ sellForIndicator: checkedSellIndicator })
  }

  handleProfitChange(event) {
    this.setState({ profit: event.target.value });
  }

  handleStopChange(event) {
    this.setState({ stop: event.target.value });
  }

  handleDateChange(event) {
    this.setState({ date: event.target.value });
  }

  //Método que submete formulário a action
  handleSubmit(event) {
    if(this.state.exchange === ''){
      toastr.error('Erro', 'O campo Exchange é obrigatório!')
    }else if(this.state.target_currency === ''){
      toastr.error('Erro', 'O campo Moeda é obrigatório!')
    }else if(this.state.candle_size === ''){
      toastr.error('Erro', 'O campo Candle é obrigatório!')
    }else if(this.state.name === ''){
      toastr.error('Erro', 'O campo Indicador é obrigatório!')
    }else if(this.state.profit === ''){
      toastr.error('Erro', 'O campo Lucro é obrigatório!')
    }else if(this.state.stop === ''){
      toastr.error('Erro', 'O campo Stop-Loss é obrigatório!')
    }else if(this.state.date === ''){
      toastr.error('Erro', 'O campo Data Início é obrigatório!')
    }else if(this.state.name === 'MACD' && (this.state.long_period === '' || this.state.short_period === '' || this.state.signal_period === '')){
      toastr.error('Erro', 'Os parâmetros do indicador MACD são Obrigatórios!')
    }else if(this.state.name === 'EMA' && this.state.period === ''){
      toastr.error('Erro', 'Os parâmetros do indicador EMA são Obrigatórios!')
    }else{
      let values = {
        exchange: this.state.exchange,
        candle_size: this.state.candle_size,
        indicator: {
          name: this.state.name,
          long_period: this.state.long_period,
          short_period: this.state.short_period,
          signal_period: this.state.signal_period
        },
        sellForIndicator: this.state.sellForIndicator,
        profit: this.state.profit,
        stop: this.state.stop,
        base_currency: 'USDT',
        target_currency: this.state.target_currency,
        date: this.state.date
      }
      testarStrategy(values)
    }    
    event.preventDefault();
  }

  render() {
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
                <form onSubmit={this.handleSubmit}>
                  <Row>
                  <InputGroup className='mb-3'>
                      <Col className='col-form-label text-right' lg='2'>
                        <Label>
                          <a href="javascript:;" className="a"><i className='icon-question' id="popover" onClick={this.togglePopover} color style={{ color: '#20a8d8' }} /></a> Exchange:
                        <Popover placement="right" isOpen={this.state.popoverOpen} target="popover" togglePopover={this.togglePopover}>
                            <PopoverBody>Selecionar a moeda que será utilizada no backtest, a moeda base sempre será USDT.</PopoverBody>
                          </Popover>
                        </Label>
                      </Col>
                      <Col lg='8'>
                        <Select
                          onChange={this.handleChangeExchange}
                          options={this.props.backtest.exchanges}
                          value={selectedOption}
                          styles={custonStyle}
                        />
                      </Col>
                    </InputGroup>
                    <InputGroup className='mb-3'>
                      <Col className='col-form-label text-right' lg='2'>
                        <Label>
                          <a href="javascript:;" className="a"><i className='icon-question' id="popover" onClick={this.togglePopover} color style={{ color: '#20a8d8' }} /></a> Moeda:
                        <Popover placement="right" isOpen={this.state.popoverOpen} target="popover" togglePopover={this.togglePopover}>
                            <PopoverBody>Selecionar a moeda que será utilizada no backtest, a moeda base sempre será USDT.</PopoverBody>
                          </Popover>
                        </Label>
                      </Col>
                      <Col lg='8'>
                        <Select
                          onChange={this.handleChangeCurrency}
                          options={this.props.backtest.currencies}
                          value={selectedOption}
                          styles={custonStyle}
                        />
                      </Col>
                    </InputGroup>
                    <InputGroup className='mb-3'>
                      <Col className='col-form-label text-right' lg='2'>
                        <Label>
                          <a href="javascript:;" className="a"><i className='icon-question' id="popover" onClick={this.togglePopover} color style={{ color: '#20a8d8' }} /></a> Candle:
                        <Popover placement="right" isOpen={this.state.popoverOpen} target="popover" togglePopover={this.togglePopover}>
                            <PopoverBody>Selecionar a moeda que será utilizada no backtest, a moeda base sempre será USDT.</PopoverBody>
                          </Popover>
                        </Label>
                      </Col>
                      <Col lg='8'>
                        <Select
                          onChange={this.handleChangeCandle}
                          options={this.props.backtest.candle}
                          value={selectedOption}
                          styles={custonStyle}
                        />
                      </Col>
                    </InputGroup>
                    <InputGroup className='mb-3'>
                      <Col className='col-form-label text-right' lg='2'>
                        <Label>
                          <a href="javascript:;" className="a"><i className='icon-question' id="popover" onClick={this.togglePopover} color style={{ color: '#20a8d8' }} /></a> Indicador:
                        <Popover placement="right" isOpen={this.state.popoverOpen} target="popover" togglePopover={this.togglePopover}>
                            <PopoverBody>Selecionar a moeda que será utilizada no backtest, a moeda base sempre será USDT.</PopoverBody>
                          </Popover>
                        </Label>
                      </Col>
                      <Col lg='8'>
                        <Select
                          onChange={this.handleChangeIndicator}
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
                                  <Input type='text' className='form-control' placeholder="26" value={this.state.long_period} onChange={this.handleLongPeriodChange} />
                                </Col>
                              </InputGroup>
                              <InputGroup>
                                <Col className='col-form-label text-right' lg='2'>
                                  <Label>
                                    <h6>MACD FastPeriod:</h6>
                                  </Label>
                                </Col>
                                <Col lg='6'>
                                  <Input type='text' name='macdShortPeriod' className='form-control' placeholder="12" value={this.state.short_period} onChange={this.handleShortPeriodChange} />
                                </Col>
                              </InputGroup>
                              <InputGroup>
                                <Col className='col-form-label text-right' lg='2'>
                                  <Label>
                                    <h6>MACD SignalPeriod:</h6>
                                  </Label>
                                </Col>
                                <Col lg='6'>
                                  <Input type='text' name='macdSignalPeriod' className='form-control' placeholder="9" value={this.state.signal_period} onChange={this.handleSignalPeriodChange} />
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
                                  <Input type='text' name='macdLongPeriod' className='form-control' placeholder="5" value={this.state.period} onChange={this.handlePeriodChange} />
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
                          <a href="javascript:;" className="a"><i className='icon-question' id="popover" onClick={this.togglePopover} color style={{ color: '#20a8d8' }} /></a> Venda pelo Indicador:
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
                          <a href="javascript:;" className="a"><i className='icon-question' id="popover" onClick={this.togglePopover} color style={{ color: '#20a8d8' }} /></a> Lucro:
                        <Popover placement="right" isOpen={this.state.popoverOpen} target="popover" togglePopover={this.togglePopover}>
                            <PopoverBody>Selecionar a moeda que será utilizada no backtest, a moeda base sempre será USDT.</PopoverBody>
                          </Popover>
                        </Label>
                      </Col>
                      <Col lg='8'>
                        <Input type='text' name='profit' className='form-control' placeholder="0.01" value={this.state.profit} onChange={this.handleProfitChange} />
                      </Col>
                    </InputGroup>
                    <InputGroup className='mb-3'>
                      <Col className='col-form-label text-right' lg='2'>
                        <Label>
                          <a href="javascript:;" className="a"><i className='icon-question' id="popover" onClick={this.togglePopover} color style={{ color: '#20a8d8' }} /></a> Stop-Loss:
                        <Popover placement="right" isOpen={this.state.popoverOpen} target="popover" togglePopover={this.togglePopover}>
                            <PopoverBody>Selecionar a moeda que será utilizada no backtest, a moeda base sempre será USDT.</PopoverBody>
                          </Popover>
                        </Label>
                      </Col>
                      <Col lg='8' >
                        <Input type='text' name='stopLoss' className='form-control' placeholder="0.1" value={this.state.stop} onChange={this.handleStopChange} />
                      </Col>
                    </InputGroup>
                    <InputGroup className='mb-3'>
                      <Col className='col-form-label text-right' lg='2'>
                        <Label>
                          <a href="javascript:;" className="a"><i className='icon-question' id="popover" onClick={this.togglePopover} color style={{ color: '#20a8d8' }} /></a> Data Inicio:
                        <Popover placement="right" isOpen={this.state.popoverOpen} target="popover" togglePopover={this.togglePopover}>
                            <PopoverBody>Selecionar a moeda que será utilizada no backtest, a moeda base sempre será USDT.</PopoverBody>
                          </Popover>
                        </Label>
                      </Col>
                      <Col lg='8'>
                        <Input type='date' name='date-teste' className='form-control' value={this.state.date} onChange={this.handleDateChange} />
                      </Col>
                    </InputGroup>
                    <InputGroup>
                      <Col>
                        <Button type='submit' value="Submit" className='btn-outline-success'>Testar</Button>
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

const mapDispatchToProps = dispatch => bindActionCreators({testarStrategy}, dispatch)
const mapStateToProps = state => ({
  backtest: state.backtest
})
export default connect(mapStateToProps, mapDispatchToProps)(ConfigTeste)
