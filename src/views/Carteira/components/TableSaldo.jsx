import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Col } from 'reactstrap';
import { getSaldo } from '../CarteiraActions'

import ReactTable from "react-table";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class TableSaldo extends Component {

  componentWillMount() {
    this.props.getSaldo()
  }

  render() {

    const columns = [{
      Header: 'Moeda',
      accessor: 'moeda' // String-based value accessors!
    }, {
      Header: 'Quantidade',
      accessor: 'quantidade',
    }]

    return (
      <Col xs="3" lg="8" sm="12">
        <Card className="card card-style">
          <CardHeader>
            <i className="fa icon-wallet"></i> Carteira de Ativos
          </CardHeader>
          <CardBody>
            <ReactTable
              data={this.props.saldo}
              columns={columns}
              defaultPageSize={5}
              className="-striped -highlight"
            />
          </CardBody>
        </Card>
      </Col>
    )
  }
}

const mapStateToProps = state => ({
  saldo: state.tableSaldo.saldo
})
const mapDispatchToProps = dispatch => bindActionCreators({ getSaldo }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TableSaldo)

