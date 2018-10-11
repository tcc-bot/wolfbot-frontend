import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Switch from '../../../components/ui/Switch'
import Card from '../../../components/ui/Card'

import { ligarRobo } from '../../../_actions/DashboardActions'

class BotaoRobo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card
        xs='12'
        lg='4'
        sm='12'
        icon='fa-rocket'
        titleHeader='Acionar Robô'>
        <Row>
          <Col lg='2' >
            <i className='fa fa-power-off fa-3x' />
          </Col>
          <Col lg='3' >
            <label htmlFor='small-radius-switch'>
              <Switch
                ligado={this.props.roboLigado}
                acao={this.props.ligarRobo}
                diametro={28}
                corDesligado='#f86c6b'
                corLigado='#4dbd74'
                textoDesligadoCor='#fff'
                textoLigadoCor='#fff'
                altura={40}
                largura={70}
                id='small-radius-switch'
                estadoAtual={this.props.roboLigado}
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
                ligado={this.props.roboLigado}
                acao={this.props.ligarRobo}
                diametro={28}
                corDesligado='#f86c6b'
                corLigado='#4dbd74'
                textoDesligadoCor='#fff'
                textoLigadoCor='#fff'
                altura={40}
                largura={70}
                id='small-radius-switch'
                estadoAtual={this.props.roboLigado}
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
                ligado={this.props.roboLigado}
                acao={this.props.ligarRobo}
                diametro={28}
                corDesligado='#f86c6b'
                corLigado='#4dbd74'
                textoDesligadoCor='#fff'
                textoLigadoCor='#fff'
                altura={40}
                largura={70}
                id='small-radius-switch'
                estadoAtual={this.props.roboLigado}
              />
            </label>
          </Col>
          <Col>
            <h5>Venda Ligado</h5>
          </Col>
        </Row>
      </Card>
    )
  }
}
const mapStateToProps = state => ({
  roboLigado: state.dashboard.roboLigado
})
const mapDispatchToProps = dispatch => bindActionCreators({ ligarRobo }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BotaoRobo)
