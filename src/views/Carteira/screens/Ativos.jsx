import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Card from '../../../components/ui/Card'
import Tabela from '../../../components/ui/Tabela'

import { getSaldo } from '../../../_actions/CarteiraActions'

class Ativos extends Component {
  componentWillMount () {
    const USER_BOT = JSON.parse(localStorage.getItem('user_bot'))
    this.props.getSaldo(USER_BOT)
  }

  render () {
    const columns = [{
      Header: 'Moeda',
      accessor: 'moeda'
    },
    {
      Header: 'Quantidade',
      accessor: 'quantidade'
    }]

    return (
      <Card
        xs='3'
        lg='8'
        sm='12'
        icon='icon-wallet'
        titleHeader='Carteira de Ativos'>
        <Tabela
          dados={this.props.saldo}
          colunas={columns}
          pageSizeDefault={5}
          noDataText='Não houve Oportunidade de Negociação no periodo'
        />
      </Card >
    )
  }
}

const mapStateToProps = state => ({
  saldo: state.carteira.saldo
})
const mapDispatchToProps = dispatch => bindActionCreators({ getSaldo }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Ativos)
