import React, { Component } from 'react'
import { Row } from 'reactstrap'
import TablePosicoes from './screens/TablePosicoes'
import Alerts from '../../components/ui/Alerts'
import ResumoOperacoes from './screens/ResumoOperacoes'
import ResumoInvestimento from './screens/ResumoInvestimento'
import BotaoRobo from './screens/BotaoRobo'
import { getExchange } from '../../_actions/DashboardActions'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() {
    this.props.getExchange()
  }

  render() {
    return (
      <div className='animated fadeIn'>
        <Alerts />
        <Row>
          <ResumoOperacoes />
          <ResumoInvestimento />
          <TablePosicoes />
          <BotaoRobo />
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  exchange: state.exchange
})
const mapDispatchToProps = dispatch => bindActionCreators({ getExchange }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
