import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactTable from 'react-table'
import Card from '../../../components/ui/Card'

import { getOpenOrdersByUser } from '../../../_actions/DashboardActions'

class TablePosicoes extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount () {
    const USER_BOT = JSON.parse(localStorage.getItem('user_bot'))
    this.props.getOpenOrdersByUser(USER_BOT)
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.result !== prevProps.result) {
  //     const resultado = this.props.result.openOrders.data
  //     console.log(this.props.result.openOrders)
  //     const data = []
  //     this.setState({ data })
  //   }
  // }

  render() {
    const columns = [{
      Header: 'Data Compra',
      accessor: 'date'
    }, {
      Header: 'Quantidade',
      accessor: 'amount'
    }, {
      Header: 'Preço',
      accessor: 'price'
    }, {
      Header: 'Moeda',
      accessor: 'currency'
    }, {
      Header: 'Custo',
      accessor: 'cost'
    }, {
      Header: 'Ação',
      Cell: row => (
        <div>
          <Button className='btn btn-outline-success btn-sm mr-1 margin-right: 1rem'>Vender</Button>
          <Button className='btn btn-outline-info btn-sm'>Info</Button>
        </div>
      )
    }]

    return (
      <Card className='card-style card' xs='9' lg='8' sm='12' icon='fa-exchange' titleHeader='Ordens Abertas' >
        <ReactTable
          data={this.props.result.openOrders.data}
          previousText='Anterior'
          nextText='Próximo'
          loadingText='Carregando...'
          noDataText='Não há ordens abertas até o momento.'
          pageText='Página'
          rowsText='linhas'
          ofText='de'
          columns={columns}
          pageSizeOptions={[5, 10]}
          defaultPageSize={5}
          className='-striped -highlight'
        />
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  result: state.dashboard
})
const mapDispatchToProps = dispatch => bindActionCreators({ getOpenOrdersByUser }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TablePosicoes)
