import React, { Component } from 'react'
import { Row, Col, Card, CardBody } from 'reactstrap'
import { connect } from 'react-redux'
import ReactTable from 'react-table'
import Widget from '../../../components/ui/Widget02'

class ResultadoTeste extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.result !== prevProps.result) {
      let resultado = this.props.result.result.result.ordersSell
      let negociacoes = resultado.length
      let lucro_total = parseFloat(this.props.result.result.result.profit).toFixed(2)
      let percentual_total = parseFloat(this.props.result.result.result.percentage * 100).toFixed(2)
      let taxas = 0
      let data = []
      for (let i = 0; i <= resultado.length - 1; i++) {
        data.push({
          data_compra: resultado[i].horaCompra,
          preco_comprado: parseFloat(resultado[i].precoComprado).toFixed(2),
          data_venda: resultado[i].horaVenda,
          preco_vendido: parseFloat(resultado[i].precoVendido).toFixed(2),
          taxa_negociacao: parseFloat(resultado[i].taxaNegociacao).toFixed(2),
          lucro_obtido: parseFloat(resultado[i].lucroObtido).toFixed(2),
          percentual_obtido: (resultado[i].percentualGanho * 100).toFixed(2) + '%'
        })
        taxas = taxas + resultado[i].taxaNegociacao
      }
      taxas = taxas.toFixed(2)
      this.setState({ data, negociacoes, lucro_total, percentual_total, taxas })
    }
  }

  render () {
    const columns = [{
      Header: 'Data Compra',
      accessor: 'data_compra'
    }, {
      Header: 'Preço Comprado',
      accessor: 'preco_comprado'
    }, {
      Header: 'Data Venda',
      accessor: 'data_venda'
    }, {
      Header: 'Preço Vendido',
      accessor: 'preco_vendido'
    }, {
      Header: 'Taxa Negociação',
      accessor: 'taxa_negociacao'
    }, {
      Header: 'Lucro Obtido',
      accessor: 'lucro_obtido'
    }, {
      Header: 'Percentual Obtido',
      accessor: 'percentual_obtido'
    }]

    return (
      <Row>
        <Col className='h1' lg='12'>
          Resultado Final
          <hr />
        </Col>
        <Col lg='3'>
          <Widget header={'$ ' + this.state.lucro_total} mainText='Lucro Total' icon='fa fa-dollar' color='success' />
        </Col>
        <Col lg='3'>
          <Widget header={this.state.percentual_total + ' %'} mainText='% Lucro Total ' icon='fa fa-percent' color='warning' />
        </Col>
        <Col lg='3'>
          <Widget header={this.state.negociacoes + ''} mainText='Nº Negociações' icon='fa fa-exchange' color='info' />
        </Col>
        <Col lg='3'>
          <Widget header={'$ ' + this.state.taxas} mainText='Taxas Exchange' icon='fa fa-frown-o' color='danger' />
        </Col>
        <Col lg='12'>
          <Card className='card-style card' >
            <CardBody>
              <ReactTable
                data={this.state.data}
                previousText='Anterior'
                nextText='Próximo'
                loadingText='Carregando...'
                noDataText='Não houve Oportunidade de Negociação no periodo'
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
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  result: state.backtest
})
export default connect(mapStateToProps)(ResultadoTeste)
