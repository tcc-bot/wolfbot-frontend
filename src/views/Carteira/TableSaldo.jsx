import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Col } from 'reactstrap';
import { getExchange, getSaldo } from './CarteiraActions'

import ReactTable from "react-table";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class TableSaldo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        this.props.getExchange()
        getSaldo()
    }

    render() {

        const data = [
            { moeda: 'BTC', quantidade: 0.34256400 },
            { moeda: 'XMR', quantidade: 0.56473400 },
            { moeda: 'DASH', quantidade: 0.67853409 },
            { moeda: 'ETC', quantidade: 0.56789054 },
            { moeda: 'ETH', quantidade: 0.79043217 },
            { moeda: 'XMR', quantidade: 0.87654908 },
            { moeda: 'BTC', quantidade: 0.14563278 },
            { moeda: 'BTC', quantidade: 0.90876890 },

        ]

        const columns = [{
            Header: 'Moeda',
            accessor: 'moeda' // String-based value accessors!
        }, {
            Header: 'Quantidade',
            accessor: 'quantidade',
        }]

        return (
            <Col xs="3" lg="8" sm="12">
                <Card className="card">
                    <CardHeader>
                        <i className="fa icon-wallet"></i> Carteira de Ativos
                    </CardHeader>
                    <CardBody>
                        <ReactTable
                            data={data}
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
    exchange: state.tableSaldo.exchange
  })
  const mapDispatchToProps = dispatch => bindActionCreators({ getExchange }, dispatch)
  export default connect(mapStateToProps, mapDispatchToProps)(TableSaldo)

