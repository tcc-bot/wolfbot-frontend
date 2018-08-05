import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, InputGroup, Label, Button } from 'reactstrap';
import { reduxForm, Field } from 'redux-form'
import Input from '../../containers/Components/Input'
import ReactTable from "react-table";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { listarHistorico } from './HistoricoActions';


class TableHistorico extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.listarHistorico();
  };

  render() {

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
        <form className="row">
          <Col xs="3">
            <Label>Data da Operação</Label>
            <InputGroup className="mb-2 xs-12 sm-12">
              <Field component={Input} type="text" name="key" placeholder="Data" className="form-control" />
            </InputGroup>
          </Col>
          <Col xs="3">
            <Label>Ação Realizada</Label>
            <InputGroup className="mb-2">
              <Field component={Input} type="text" name="key" placeholder="Ação" className="form-control" />
            </InputGroup>
          </Col>
          <Col xs="3">
            <Label>Moeda</Label>
            <InputGroup className="mb-2">
              <Field component={Input} type="text" name="key" placeholder="Moeda" className="form-control" />
            </InputGroup>
          </Col>
          <Col xs="3">
            <Label>Tipo de Operação</Label>
            <InputGroup className="mb-2">
              <Field component={Input} type="text" name="key" placeholder="Operação" className="form-control" />
            </InputGroup>
          </Col>
          <Row style={{ margin: 'auto', marginBottom: '10px' }}>
            <Col xs="6">
              <Button type="submit" className="btn-outline-success">Buscar</Button>
            </Col>
          </Row>
        </form>
        <Card className="card">
          <CardBody>
            <ReactTable
              data={this.props.historicos}
              columns={columns}
              defaultPageSize={this.props.historicos.length}
              className="-striped -highlight"
              pageSizeOptions={[this.props.historicos.length]}
            />
          </CardBody>
        </Card>
      </Col >
    )
  }
}

TableHistorico = reduxForm({ form: 'formHistorico' })(TableHistorico)
const mapDispatchToProps = dispatch => bindActionCreators({ listarHistorico }, dispatch)
const mapStateToProps = state => ({
  historicos: state.historico.historicos
})
export default connect(mapStateToProps, mapDispatchToProps)(TableHistorico)
