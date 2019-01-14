import React, { Component } from 'react'
import { Row } from 'reactstrap'
import TablePosicoes from './screens/TablePosicoes'
import BotaoRobo from './screens/BotaoRobo'
import ResumoOperacoes from './screens/ResumoOperacoes'
import ResumoInvestimento from './screens/ResumoInvestimento'

import Alerts from '../../components/ui/Alerts'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
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

export default Dashboard
