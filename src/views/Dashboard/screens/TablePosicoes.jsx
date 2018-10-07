import React, { Component } from 'react'
import { Button, Card, CardHeader, CardBody, Col } from 'reactstrap'

import ReactTable from 'react-table'

class TablePosicoes extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const data = [
      { moeda: 'BTC', quantidade: 0.34256400, custo: 26.78, resultado: '7.00%', tempo: '5 dias' },
      { moeda: 'XMR', quantidade: 0.56473400, custo: 67.98, resultado: '10.00%', tempo: '6 dias' },
      { moeda: 'DASH', quantidade: 0.67853409, custo: 54.89, resultado: '-5.00%', tempo: '1 dias' },
      { moeda: 'ETC', quantidade: 0.56789054, custo: 23.89, resultado: '4.00%', tempo: '2 dias' },
      { moeda: 'ETH', quantidade: 0.79043217, custo: 45.67, resultado: '1.00%', tempo: '2 dias' },
      { moeda: 'XMR', quantidade: 0.87654908, custo: 76.45, resultado: '12.00%', tempo: '4 dias' },
      { moeda: 'BTC', quantidade: 0.14563278, custo: 23.34, resultado: '-5.00%', tempo: '7 dias' },
      { moeda: 'BTC', quantidade: 0.90876890, custo: 13.65, resultado: '5.00%', tempo: '9 dias' }

    ]

    const columns = [{
      Header: 'Moeda',
      accessor: 'moeda' // String-based value accessors!
    }, {
      Header: 'Quantidade',
      accessor: 'quantidade'
    }, {
      Header: 'Custo',
      accessor: 'custo'
    }, {
      Header: 'Tempo',
      accessor: 'tempo'
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
      <Col xs='9' lg='8' sm='12'>
        <Card className='card-style card'>
          <CardHeader className='card-header-style'>
            <i className='fa fa-exchange' /> Ordens Abertas
          </CardHeader>
          <CardBody>
            <ReactTable
              data={data}
              previousText='Anterior'
              nextText='Próximo'
              loadingText='Carregando...'
              noDataText='Não há ordens abertas'
              pageText='Página'
              rowsText='linhas'
              ofText='de'
              columns={columns}
              pageSizeOptions={[5, 10]}
              defaultPageSize={5}
              className='-striped -highlight'
            />
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default TablePosicoes
