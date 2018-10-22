import React, { Component } from 'react'
import { Row } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listarHistorico } from '../../_actions/HistoricoActions'


class Historico extends Component {
  constructor (props) {
    super(props)
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
          <Card
            xs='12'
            lg='12'
            sm='12'
            icon='fa-history'
            titleHeader='Histórico de Transações'>
            <FormHistorico />
            <TableHistorico />
          </Card>
        </Row>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ listarHistorico }, dispatch)
const mapStateToProps = state => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(Historico)
