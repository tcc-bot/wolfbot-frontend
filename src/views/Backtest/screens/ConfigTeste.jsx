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
  Col
} from 'reactstrap'
import Input from '../../../components/ui/Input'
import Switch from 'react-switch'
import Select from 'react-select'
import classnames from 'classnames'

class ConfigTeste extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: '1'
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
    return (
      <Col xs='12' lg='12' sm='6'>
        <Card className='card-style card' xs='3' lg='12' sm='6'>
          <CardHeader className='card-header-style'>
            <i className='icon-equalizer' /> Testar Estratégia
          </CardHeader>
          <CardBody>
            <Nav className="nav-tabs" >
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
                    <Col className="col-form-label" lg='1'>
                        <Label>
                            <h6>Moeda:</h6>
                        </Label>
                    </Col>
                    <Col lg="10">
                    <Select
                        onChange={this.handleChange}
                        options={this.props.exchanges}
                        value={this.props.selectedOptions}
                        />
                    </Col>
                </InputGroup>
                <InputGroup className='mb-3'>
                    <Col className="col-form-label" lg='1'>
                        <Label>
                            <h6>Candle:</h6>
                        </Label>
                    </Col>
                    <Col lg="10">
                    <Select
                        onChange={this.handleChange}
                        options={this.props.exchanges}
                        value={this.props.selectedOptions}
                        />
                    </Col>
                </InputGroup>
                <InputGroup className='mb-3'>
                <Col className="col-form-label" lg='1'>
                        <Label>
                            <h6>Sell Indicador:</h6>
                        </Label>
                    </Col>
                <Col lg='3' >
                  <Switch
                    //checked={this.props.roboLigado}
                    //onChange={() => this.props.ligarRobo(this.props.roboLigado)}
                    handleDiameter={28}
                    offColor='#f86c6b'
                    onColor='#4dbd74'
                    offHandleColor='#fff'
                    onHandleColor='#fff'
                    height={40}
                    width={70}
                    className='react-switch'
                    id='small-radius-switch'
                  />
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

export default ConfigTeste
