import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, InputGroup, Label, Button } from 'reactstrap';
import { reduxForm, Field } from 'redux-form'
import Input from '../../containers/Components/Input'
import ReactTable from "react-table";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { buscarHistorico } from './HistoricoActions';

class TableHistorico extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    const { reset, handleSubmit } = this.props;
    const columns = [{
      Header: 'Data da Operação',
      accessor: 'dataOperacao' // String-based value accessors!
    }, {
      Header: 'Quantidade',
      accessor: 'quantidade',
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
      <Col xs="12" lg="12" sm="12">
        <Card className="card">
          <CardBody>
            <ReactTable
              data={this.props.historicos}
              columns={columns}
              defaultPageSize={10}
              className="-striped -highlight"
              pageSizeOptions={[this.props.historicos.length]}
            />
          </CardBody>
        </Card>
      </Col >
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
const mapStateToProps = state => ({
  historicos: state.historico.historicos
})
export default connect(mapStateToProps, mapDispatchToProps)(TableHistorico)
