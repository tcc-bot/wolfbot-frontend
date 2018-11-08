import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Label, Card, CardHeader, CardBody, InputGroup, Row, Col, Collapse, Popover, PopoverBody, Button, Input } from 'reactstrap'
import Switch from 'react-switch'
import Select from 'react-select'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { testarStrategy } from '../../../_actions/BacktestAction'
import ResultadoTeste from './ResultadoTeste'
import { toastr } from 'react-redux-toastr'

class ConfigTeste extends Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeSwitchSellIndicator = this.handleChangeSwitchSellIndicator.bind(this);
    this.toggle = this.toggle.bind(this)
    this.togglePopover = this.togglePopover.bind(this)
    this.state = {
      activeTab: '1',
      popoverExchange: false,
      popoverCurrency: false,
      popoverCandle: false,
      popoverIndicator: false,
      popoverSellIndicator: false,
      popoverProfit: false,
      popoverStop: false,
      popoverData: false,
      checkedSellIndicator: false,
      colapseEMA: false,
      colapseMACD: false,
      colapseSTOCH: false,
      colapseCCI: false,
      colapseBBANDS: false,
      collapseResult: false,
      exchange: '',
      candle_size: '',
      name: '',
      ema_period: '',
      macd_long_period: '',
      macd_short_period: '',
      macd_signal_period: '',
      stoch_k_period: '',
      stoch_k_slow_period: '',
      stoch_d_period: '',
      cci_period: '',
      bbands_period: '',
      bbands_stddev_period: '',
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
      this.setState({ activeTab: tab })
    }
  }

  togglePopover(event) {
    if (event.target.id === 'popoverExchange') {
      this.setState({ popoverExchange: !this.state.popoverExchange })
    }
    if (event.target.id === 'popoverCurrency') {
      this.setState({ popoverCurrency: !this.state.popoverCurrency })
    }
    if (event.target.id === 'popoverCandle') {
      this.setState({ popoverCandle: !this.state.popoverCandle })
    }
    if (event.target.id === 'popoverIndicator') {
      this.setState({ popoverIndicator: !this.state.popoverIndicator })
    }
    if (event.target.id === 'popoverSellIndicator') {
      this.setState({ popoverSellIndicator: !this.state.popoverSellIndicator })
    }
    if (event.target.id === 'popoverProfit') {
      this.setState({ popoverProfit: !this.state.popoverProfit })
    }
    if (event.target.id === 'popoverStop') {
      this.setState({ popoverStop: !this.state.popoverStop })
    }
    if (event.target.id === 'popoverDate') {
      this.setState({ popoverDate: !this.state.popoverDate })
    }
  }

  handleChangeExchange = (selectedOptions, event) => {
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
    this.setState({ name: selectedOptions.value })
    if (selectedOptions.value === 'EMA') {
      this.setState({ collapseEMA: !this.state.collapse })
    } else if (selectedOptions.value !== 'EMA') {
      this.setState({ collapseEMA: false })
    }
    if (selectedOptions.value === 'MACD') {
      this.setState({ collapseMACD: !this.state.collapse })
    } else if (selectedOptions.value !== 'MACD') {
      this.setState({ collapseMACD: false })
    }
    if (selectedOptions.value === 'STOCH') {
      this.setState({ collapseSTOCH: !this.state.collapse })
    } else if (selectedOptions.value !== 'STOCH') {
      this.setState({ collapseSTOCH: false })
    }
    if (selectedOptions.value === 'CCI') {
      this.setState({ collapseCCI: !this.state.collapse })
    } else if (selectedOptions.value !== 'CCI') {
      this.setState({ collapseCCI: false })
    }
    if (selectedOptions.value === 'BOLLINGER BANDS') {
      this.setState({ collapseBBANDS: !this.state.collapse })
    } else if (selectedOptions.value !== 'BOLLINGER BANDS') {
      this.setState({ collapseBBANDS: false })
    }

  }

  handleInputChange(event) {
    if (event.target.id === 'ema_period') {
      this.setState({ ema_period: event.target.value })
    }
    if (event.target.id === 'macd_long_period') {
      this.setState({ macd_long_period: event.target.value })
    }
    if (event.target.id === 'macd_short_period') {
      this.setState({ macd_short_period: event.target.value })
    }
    if (event.target.id === 'macd_signal_period') {
      this.setState({ macd_signal_period: event.target.value })
    }
    if (event.target.id === 'stoch_k_period') {
      this.setState({ stoch_k_period: event.target.value })
    }
    if (event.target.id === 'stoch_k_slow_period') {
      this.setState({ stoch_k_slow_period: event.target.value })
    }
    if (event.target.id === 'stoch_d_period') {
      this.setState({ stoch_d_period: event.target.value })
    }
    if (event.target.id === 'cci_period') {
      this.setState({ cci_period: event.target.value })
    }
    if (event.target.id === 'bbands_period') {
      this.setState({ bbands_period: event.target.value })
    }
    if (event.target.id === 'bbands_stddev_period') {
      this.setState({ bbands_stddev_period: event.target.value })
    }
    if (event.target.id === 'date') {
      this.setState({ date: event.target.value })
    }
    if (event.target.id === 'profit') {
      this.setState({ profit: event.target.value })
    }
    if (event.target.id === 'stopLoss') {
      this.setState({ stop: event.target.value })
    }
  }

  handleChangeSwitchSellIndicator(checkedSellIndicator) {
    this.setState({ checkedSellIndicator })
    this.setState({ sellForIndicator: checkedSellIndicator })
  }

  //Método que submete formulário a action
  handleSubmit(event) {
    if (this.state.exchange === '') {
      toastr.error('Erro', 'O campo Exchange é obrigatório!')
    } else if (this.state.target_currency === '') {
      toastr.error('Erro', 'O campo Moeda é obrigatório!')
    } else if (this.state.candle_size === '') {
      toastr.error('Erro', 'O campo Candle é obrigatório!')
    } else if (this.state.name === '') {
      toastr.error('Erro', 'O campo Indicador é obrigatório!')
    } else if (this.state.profit === '') {
      toastr.error('Erro', 'O campo Lucro é obrigatório!')
    } else if (this.state.stop === '') {
      toastr.error('Erro', 'O campo Stop-Loss é obrigatório!')
    } else if (this.state.date === '') {
      toastr.error('Erro', 'O campo Data Início é obrigatório!')
    } else if (this.state.name === 'EMA' && this.state.ema_period === '') {
      toastr.error('Erro', 'Os parâmetros do indicador EMA são Obrigatórios!')
    } else if (this.state.name === 'MACD' && (this.state.macd_long_period === '' || this.state.macd_short_period === '' || this.state.macd_signal_period === '')) {
      toastr.error('Erro', 'Os parâmetros do indicador MACD são Obrigatórios!')
    } else if (this.state.name === 'STOCH' && (this.state.stoch_k_period === '' || this.state.stoch_k_slow_period === '' || this.state.stoch_d_period === '')) {
      toastr.error('Erro', 'Os parâmetros do indicador STOCH são Obrigatórios!')
    } else if (this.state.name === 'CCI' && this.state.cci_period === '') {
      toastr.error('Erro', 'Os parâmetros do indicador CCI são Obrigatórios!')
    } else if (this.state.name === 'BBANDS' && (this.state.bbands_period === '' || this.state.bbands_stddev_period === '')) {
      toastr.error('Erro', 'Os parâmetros do indicador BBANDS são Obrigatórios!')
    } else {
      let values = {
        exchange: this.state.exchange,
        candle_size: this.state.candle_size,
        indicator: {
          name: this.state.name,
          macd_long_period: this.state.macd_long_period,
          macd_short_period: this.state.macd_short_period,
          macd_signal_period: this.state.macd_signal_period,
          ema_period: this.state.ema_period,
          stoch_k_period: this.state.stoch_k_period,
          stoch_k_slow_period: this.state.stoch_k_slow_period,
          stoch_d_period: this.state.stoch_d_period,
          cci_period: this.state.cci_period,
          bbands_period: this.state.bbands_period,
          bbands_stddev_period: this.state.bbands_stddev_period,
        },
        sellForIndicator: this.state.sellForIndicator,
        profit: this.state.profit,
        stop: this.state.stop,
        base_currency: 'USDT',
        target_currency: this.state.target_currency,
        date: this.state.date
      }
      this.props.testarStrategy(values)
      this.setState({ collapseResult: !this.state.collapse })
    }
    event.preventDefault()
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
                <form method="post" onSubmit={this.handleSubmit}>
                  <Row>
                    <InputGroup className='mb-3'>
                      <Col className='col-form-label text-right' lg='2'>
                        <Label>
                          <a href="javascript:;" className="a"><i className='icon-question' id="popoverExchange" onClick={this.togglePopover} /></a> Exchange:
                        <Popover placement="left" isOpen={this.state.popoverExchange} target="popoverExchange">
                            <PopoverBody>
                              Selecionar a Exchange que será aplicado o teste.
                            </PopoverBody>
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
                          <a href="javascript:;" className="a"><i className='icon-question' id="popoverCurrency" onClick={this.togglePopover} /></a> Moeda:
                        <Popover placement="left" isOpen={this.state.popoverCurrency} target="popoverCurrency">
                            <PopoverBody>
                              Selecionar a moeda que será utilizada no backtest, a moeda base sempre será USDT.
                            </PopoverBody>
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
                          <a href="javascript:;" className="a"><i className='icon-question' id="popoverCandle" onClick={this.togglePopover} /></a> Candle:
                        <Popover placement="left" isOpen={this.state.popoverCandle} target="popoverCandle">
                            <PopoverBody>
                              Candle é o intervalo de tempo em que são agrupados os dados de um ativo, esses dados são:
                              preço de abertura, preço de fechamento, preço máximo e preço mínimo.
                            </PopoverBody>
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
                          <a href="javascript:;" className="a"><i className='icon-question' id="popoverIndicator" onClick={this.togglePopover} /></a> Indicador:
                        <Popover placement="left" isOpen={this.state.popoverIndicator} target="popoverIndicator">
                            <PopoverBody>
                              Selecionar a o indicador financeiro que será aplicado no teste.
                            </PopoverBody>
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
                        <Collapse isOpen={this.state.collapseEMA}>
                          <Card>
                            <CardBody>
                              <InputGroup>
                                <Col className='col-form-label text-right' lg='2'>
                                  <Label>
                                    <h6>EMA period:</h6>
                                  </Label>
                                </Col>
                                <Col lg='6'>
                                  <Input type='text' id="ema_period" className='form-control' placeholder="5" value={this.state.ema_period} onChange={this.handleInputChange} />
                                </Col>
                              </InputGroup>
                            </CardBody>
                          </Card>
                        </Collapse>
                        <Collapse isOpen={this.state.collapseMACD}>
                          <Card>
                            <CardBody>
                              <InputGroup>
                                <Col className='col-form-label text-right' lg='2'>
                                  <Label>
                                    <h6>long period:</h6>
                                  </Label>
                                </Col>
                                <Col lg='6'>
                                  <Input type='text' id="macd_long_period" className='form-control' placeholder="26" value={this.state.macd_long_period} onChange={this.handleInputChange} />
                                </Col>
                              </InputGroup>
                              <InputGroup>
                                <Col className='col-form-label text-right' lg='2'>
                                  <Label>
                                    <h6>short period:</h6>
                                  </Label>
                                </Col>
                                <Col lg='6'>
                                  <Input type='text' id="macd_short_period" className='form-control' placeholder="12" value={this.state.macd_short_period} onChange={this.handleInputChange} />
                                </Col>
                              </InputGroup>
                              <InputGroup>
                                <Col className='col-form-label text-right' lg='2'>
                                  <Label>
                                    <h6>signal period:</h6>
                                  </Label>
                                </Col>
                                <Col lg='6'>
                                  <Input type='text' id="macd_signal_period" className='form-control' placeholder="9" value={this.state.macd_signal_period} onChange={this.handleInputChange} />
                                </Col>
                              </InputGroup>
                            </CardBody>
                          </Card>
                        </Collapse>
                        <Collapse isOpen={this.state.collapseSTOCH}>
                          <Card>
                            <CardBody>
                              <InputGroup>
                                <Col className='col-form-label text-right' lg='2'>
                                  <Label>
                                    <h6>K period:</h6>
                                  </Label>
                                </Col>
                                <Col lg='6'>
                                  <Input type='text' id="stoch_k_period" className='form-control' placeholder="14" value={this.state.stoch_k_period} onChange={this.handleInputChange} />
                                </Col>
                              </InputGroup>
                              <InputGroup>
                                <Col className='col-form-label text-right' lg='2'>
                                  <Label>
                                    <h6>K slow period:</h6>
                                  </Label>
                                </Col>
                                <Col lg='6'>
                                  <Input type='text' id="stoch_k_slow_period" className='form-control' placeholder="3" value={this.state.stoch_k_slow_period} onChange={this.handleInputChange} />
                                </Col>
                              </InputGroup>
                              <InputGroup>
                                <Col className='col-form-label text-right' lg='2'>
                                  <Label>
                                    <h6>D period:</h6>
                                  </Label>
                                </Col>
                                <Col lg='6'>
                                  <Input type='text' id="stoch_d_period" className='form-control' placeholder="3" value={this.state.stoch_d_period} onChange={this.handleInputChange} />
                                </Col>
                              </InputGroup>
                            </CardBody>
                          </Card>
                        </Collapse>
                        <Collapse isOpen={this.state.collapseCCI}>
                          <Card>
                            <CardBody>
                              <InputGroup>
                                <Col className='col-form-label text-right' lg='2'>
                                  <Label>
                                    <h6>CCI period:</h6>
                                  </Label>
                                </Col>
                                <Col lg='6'>
                                  <Input type='text' id="cci_period" className='form-control' placeholder="20" value={this.state.cci_period} onChange={this.handleInputChange} />
                                </Col>
                              </InputGroup>
                            </CardBody>
                          </Card>
                        </Collapse>
                        <Collapse isOpen={this.state.collapseBBANDS}>
                          <Card>
                            <CardBody>
                              <InputGroup>
                                <Col className='col-form-label text-right' lg='2'>
                                  <Label>
                                    <h6>bbands period:</h6>
                                  </Label>
                                </Col>
                                <Col lg='6'>
                                  <Input type='text' id="bbands_period" className='form-control' placeholder="20" value={this.state.bbands_period} onChange={this.handleInputChange} />
                                </Col>
                              </InputGroup>
                              <InputGroup>
                                <Col className='col-form-label text-right' lg='2'>
                                  <Label>
                                    <h6>stddev period:</h6>
                                  </Label>
                                </Col>
                                <Col lg='6'>
                                  <Input type='text' id="bbands_stddev_period" className='form-control' placeholder="2" value={this.state.bbands_stddev_period} onChange={this.handleInputChange} />
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
                          <a href="javascript:;" className="a"><i className='icon-question' id="popoverSellIndicator" onClick={this.togglePopover} /></a> Venda pelo Indicador:
                        <Popover placement="left" isOpen={this.state.popoverSellIndicator} target="popoverSellIndicator">
                            <PopoverBody>
                              Quando acionado, o teste usará o indicador financeiro para vender a moeda e não levará em conta
                              o lucro especificado no campo Lucro.
                            </PopoverBody>
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
                          <a href="javascript:;" className="a"><i className='icon-question' id="popoverProfit" onClick={this.togglePopover} /></a> Lucro:
                        <Popover placement="left" isOpen={this.state.popoverProfit} target="popoverProfit">
                            <PopoverBody>
                              Especificar o lucro desejado em cada negociação, esse valor deve ser sinalizado em percentual
                              por exemplo 0.03 = 3% de lucro, 0.10 = 10% de lucro.
                            </PopoverBody>
                          </Popover>
                        </Label>
                      </Col>
                      <Col lg='8'>
                        <Input type='text' id='profit' className='form-control' placeholder="0.01" value={this.state.profit} onChange={this.handleInputChange} />
                      </Col>
                    </InputGroup>
                    <InputGroup className='mb-3'>
                      <Col className='col-form-label text-right' lg='2'>
                        <Label>
                          <a href="javascript:;" className="a"><i className='icon-question' id="popoverStop" onClick={this.togglePopover} /></a> Stop-Loss:
                        <Popover placement="left" isOpen={this.state.popoverStop} target="popoverStop">
                            <PopoverBody>
                              Stop-loss é a perda aceitável em uma queda repentina do mercado, esse valor deve ser
                              sinalizado em percentual por exemplo 0.1 = 10%, 0.01 = 1% o valor recomendável é 10%.
                            </PopoverBody>
                          </Popover>
                        </Label>
                      </Col>
                      <Col lg='8' >
                        <Input type='text' id='stopLoss' className='form-control' placeholder="0.1" value={this.state.stop} onChange={this.handleInputChange} />
                      </Col>
                    </InputGroup>
                    <InputGroup className='mb-3'>
                      <Col className='col-form-label text-right' lg='2'>
                        <Label>
                          <a href="javascript:;" className="a"><i className='icon-question' id="popoverDate" onClick={this.togglePopover} /></a> Data Inicio:
                        <Popover placement="left" isOpen={this.state.popoverDate} target="popoverDate">
                            <PopoverBody>
                              Data Inicio é a data inicial que voce usará para aplicar o teste, é uma data retroativa
                              OBS: As exchanges limitam essa busca para no máximo 40 dias reatroativos.
                            </PopoverBody>
                          </Popover>
                        </Label>
                      </Col>
                      <Col lg='8'>
                        <Input type='date' id="date" className='form-control' value={this.state.date} onChange={this.handleInputChange} />
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
                <Row>
                </Row>
              </TabPane>
            </TabContent>
          </CardBody>
          <Col lg="12">
            <Collapse isOpen={this.state.collapseResult}>
              <ResultadoTeste />
            </Collapse>
          </Col>
        </Card >
      </Col>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ testarStrategy }, dispatch)
const mapStateToProps = state => ({
  backtest: state.backtest
})
export default connect(mapStateToProps, mapDispatchToProps)(ConfigTeste)
