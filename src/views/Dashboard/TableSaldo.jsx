import React, { Component } from 'react';
import { Button, Card, CardHeader, CardBody, Table, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';


class TableSaldo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Col xs="6" lg="3">
                <Card className="card">
                    <CardHeader>
                        <i className=" fa icon-wallet"></i> Carteira de Ativos
                    </CardHeader>
                    <CardBody>
                        <Table responsive size="sm">
                            <thead>
                                <tr>
                                    <th>Moeda</th>
                                    <th>Saldo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>BTC</td>
                                    <td>0.00240000</td>
                                </tr>
                                <tr>
                                    <td>ETH</td>
                                    <td>0.98006743</td>
                                </tr>
                                <tr>
                                    <td>XRP</td>
                                    <td>23.23400000</td>
                                </tr>
                                <tr>
                                    <td>TRT</td>
                                    <td>123.90870000</td>
                                </tr>
                                <tr>
                                    <td>XMR</td>
                                    <td>18.00000340</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Pagination className="pagination pagination-sm" >
                            <PaginationItem>
                                <PaginationLink previous tag="button">Anterior</PaginationLink>
                            </PaginationItem>
                            <PaginationItem active>
                                <PaginationLink tag="button">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink tag="button">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink tag="button">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink next tag="button">Próximo</PaginationLink>
                            </PaginationItem>
                        </Pagination>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default TableSaldo;

