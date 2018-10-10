import React, { Component } from 'react'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col
} from 'reactstrap'
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
            <i className='fa fa-equalizer' /> Testar Estratégia
          </CardHeader>
          <CardBody>
            <Nav tabs >
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  className='nav nav-item'
                  onClick={() => { this.toggle('1') }}
                >
                                    Estratégia
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  className='nav nav-item'
                  onClick={() => { this.toggle('2') }}
                >
                                    Resultados
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId='1'>
                <Row />
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
