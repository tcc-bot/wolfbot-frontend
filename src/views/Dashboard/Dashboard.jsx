import React, { Component } from 'react';
import { Row } from 'reactstrap';
import TablePosicoes from './TablePosicoes'
import Alerts from '../../containers/Components/Alerts'
import ResumoOperacoes from './ResumoOperacoes'
import ResumoInvestimento from './ResumoInvestimento';
import BotaoRobo from './BotaoRobo'
import { getExchange } from './DashboardActions'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount() {
    this.props.getExchange()
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Alerts />
        <Row>
          <ResumoOperacoes />
          <ResumoInvestimento />
          <TablePosicoes />
          <BotaoRobo />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exchange: state.exchange
})
const mapDispatchToProps = dispatch => bindActionCreators({ getExchange }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

