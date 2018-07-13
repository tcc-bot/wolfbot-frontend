import React, { Component } from 'react';
import { Row } from 'reactstrap';
import TablePosicoes from './TablePosicoes'
import Alerts from '../../containers/Components/Alerts'
import ResumoOperacoes from './ResumoOperacoes'
import ResumoInvestimento from './ResumoInvestimento';
import BotaoRobo from './BotaoRobo'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
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

export default Dashboard;
