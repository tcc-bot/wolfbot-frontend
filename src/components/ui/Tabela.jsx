import React, { Component } from 'react'
import ReactTable from 'react-table'

class Tabela extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ReactTable
        data={this.props.dados}
        columns={this.props.colunas}
        previousText='Anterior'
        nextText='Próximo'
        loadingText='Carregando...'
        noDataText='Não há dados!'
        pageText='Página'
        rowsText='linhas'
        ofText='de'
        pageSizeOptions={[this.props.dados.length]}
        className='-striped -highlight'
        defaultPageSize={this.props.pageSizeDefault}
      >
      </ReactTable>
    )
  }
}
export default Tabela
