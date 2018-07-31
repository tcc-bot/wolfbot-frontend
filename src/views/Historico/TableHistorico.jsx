import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, InputGroup, Label, Button } from 'reactstrap';
import { reduxForm, Field } from 'redux-form'
import Input from '../../containers/Components/Input'
import ReactTable from "react-table";
import moment from 'moment'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class TableHistorico extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    const data = [
      { date: '21/11/1995 13:00', quantidade: 0.34256400, custo: 26.78, acao: 'Venda', moeda: 'BTC', operacao: 'Manual' },
      { date: '21/11/1995 13:00', quantidade: 0.56473400, custo: 67.98, acao: 'Compra', moeda: 'BTC', operacao: 'Manual' },
      { date: '21/11/1995 13:00', quantidade: 0.67853409, custo: 54.89, acao: 'Venda', moeda: 'BTC', operacao: 'Manual' },
      { date: '21/11/1995 13:00', quantidade: 0.56789054, custo: 23.89, acao: 'Venda', moeda: 'BTC', operacao: 'Automática' },
      { date: '21/11/1995 13:00', quantidade: 0.79043217, custo: 45.67, acao: 'Compra', moeda: 'BTC', operacao: 'Manual' },
      { date: '21/11/1995 13:00', quantidade: 0.87654908, custo: 76.45, acao: 'Venda', moeda: 'BTC', operacao: 'Automática' },
      { date: '21/11/1995 13:00', quantidade: 0.14563278, custo: 23.34, acao: 'Venda', moeda: 'BTC', operacao: 'Manual' },
      { date: '21/11/1995 13:00', quantidade: 0.90876890, custo: 13.65, acao: 'Venda', moeda: 'BTC', operacao: 'Automática' }

    ]

    const columns = [{
      Header: 'Data da Operação',
      accessor: 'date' // String-based value accessors!
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
      accessor: 'operacao'
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
              data={data}
              columns={columns}
              defaultPageSize={data.length}
              className="-striped -highlight"
              pageSizeOptions={[data.length]}
            />
          </CardBody>
        </Card>
      </Col >
    )
  }
}

TableHistorico = reduxForm({ form: 'formHistorico' })(TableHistorico)
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(TableHistorico)
