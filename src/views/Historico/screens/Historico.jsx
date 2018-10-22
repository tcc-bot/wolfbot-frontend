import React, { Component } from 'react'
import { Row, Col, Card, CardHeader, CardBody, InputGroup, Label, Button } from 'reactstrap'
import TableHistorico from './components/TableHistorico'
import FormHistorico from './components/FormHistorico'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { listarHistorico } from '../../_actions/HistoricoActions'

class Historico extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this)

    this.state = {
      dropdownOpen: false,
      radioSelected: 2
    }
  }

  componentDidMount () {
    this.props.listarHistorico()
  }

  toggle () {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  onRadioBtnClick (radioSelected) {
    this.setState({
      radioSelected: radioSelected
    })
  }

  render () {
    return (
      <div className='animated fadeIn'>
        <Row>
          <Col xs='12' lg='12' sm='12'>
            <Card className='card card-style'>
              <CardHeader>
                <i className='fa fa-history' />Histórico de Transações</CardHeader>
              <CardBody>
                <FormHistorico />
                <TableHistorico />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ listarHistorico }, dispatch)
const mapStateToProps = state => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(Historico)
