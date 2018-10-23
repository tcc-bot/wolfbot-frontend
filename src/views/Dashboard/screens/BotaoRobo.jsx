import React, { Component } from 'react'
import { Row, Col, CardHeader, CardBody } from 'reactstrap'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Switch from '../../../components/ui/Switch'
import Card from '../../../components/ui/Card'

import { ligarRobo } from '../../../_actions/DashboardActions'

class BotaoRobo extends Component {
  constructor(props) {
    super(props)
  }

  handleChange(){

  }
  render () {
    return (
      <Col xs='12' lg='4' sm='12' >
        <Card className='card-style card'>
          <CardHeader className='card-header-style'>
            <i className='fa fa-rocket' /> Acionar Robo
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg='2' >
                <i className='fa fa-power-off fa-3x' />
              </Col>
              <Col lg='3' >
                <label htmlFor='small-radius-switch'>
                  <Switch
                    checked={this.props.roboLigado}
                    // onChange={() => this.props.ligarRobo(this.props.roboLigado)}
                    onChange={this.handleChange}
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
                </label>
              </Col>
              <Col>
                <h5>Robo Ligado</h5>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col lg='2' >
                <i className='fa fa-arrow-down fa-3x' />
              </Col>
              <Col lg='3' >
                <label htmlFor='small-radius-switch'>
                  <Switch
                    checked={false}
                    onChange={this.handleChange}
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
                </label>
              </Col>
              <Col>
                <h5>Compra Ligado</h5>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col lg='2' >
                <i className='fa fa-arrow-up fa-3x' />
              </Col>
              <Col lg='3' >
                <label htmlFor='small-radius-switch'>
                  <Switch
                    checked={false}
                    onChange={this.handleChange}
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
                </label>
              </Col>
              <Col>
                <h5>Venda Ligado</h5>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    )
  }
}
const mapStateToProps = state => ({
  roboLigado: state.dashboard.roboLigado
})
const mapDispatchToProps = dispatch => bindActionCreators({ ligarRobo }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BotaoRobo)
