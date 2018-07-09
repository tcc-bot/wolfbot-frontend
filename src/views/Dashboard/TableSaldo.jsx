import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Col } from 'reactstrap';

import ReactTable from "react-table";


class TableSaldo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
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
            <Col xs="3" lg="4" sm="12">
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

export default TableSaldo;

