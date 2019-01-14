import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Col } from 'reactstrap'
import { buscarHistorico } from '../../../_actions/HistoricoActions'
import Tabela from '../../../components/ui/Tabela'

class TableHistorico extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { reset, handleSubmit } = this.props
    const columns = [{
      Header: 'Data da Operação',
      accessor: 'dataOperacao'
    }, {
      Header: 'Quantidade',
      accessor: 'quantidade'
    }, {
      Header: 'Custo',
      accessor: 'custo'
    }, {
      Header: 'Ação Realizada',
      accessor: 'acao'
    }, {
      Header: 'Moeda',
      accessor: 'moeda'
    }, {
      Header: 'Tipo de Operação',
      accessor: 'tipoOperacao'
    }]
    return (
      <Col xs='12' lg='12' sm='12'>
        <Tabela
          dados={this.props.historicos}
          colunas={columns}
          pageSizeDefault={10}
        />
      </Col>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
const mapStateToProps = state => ({
  historicos: state.historico.historicos
})
export default connect(mapStateToProps, mapDispatchToProps)(TableHistorico)
