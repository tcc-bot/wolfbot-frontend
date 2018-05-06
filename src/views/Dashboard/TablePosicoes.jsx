import React, { Component } from 'react';
import { Button, Card, CardHeader, CardBody, Table, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';


class TablePosicoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Col xs="12" lg="9">
                <Card className="card text-white bg-dark">
                    <CardHeader className="h5">
                        <i className="fa fa-random"></i> Posições Abertas
              </CardHeader>
                    <CardBody>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Moeda</th>
                                    <th>Quantidade</th>
                                    <th>Custo</th>
                                    <th>Resultado</th>
                                    <th>Tempo</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>BTC</td>
                                    <td>0.34256400</td>
                                    <td>26.78</td>
                                    <td>7.00%</td>
                                    <td>5 dias</td>
                                    <td>
                                        <Button className="btn btn-success btn-sm mr-1 margin-right: 1rem">Vender Posição</Button>
                                        <Button className="btn btn-info btn-sm">Info</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>XRM</td>
                                    <td>0.56473400</td>
                                    <td>56.78</td>
                                    <td>3.00%</td>
                                    <td>3 dias</td>
                                    <td>
                                        <Button className="btn btn-success btn-sm mr-1 margin-right: 1rem">Vender Posição</Button>
                                        <Button className="btn btn-info btn-sm">Info</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>BTC</td>
                                    <td>0.34256400</td>
                                    <td>26.78</td>
                                    <td>7.00%</td>
                                    <td>5 dias</td>
                                    <td>
                                        <Button className="btn btn-success btn-sm mr-1 margin-right: 1rem">Vender Posição</Button>
                                        <Button className="btn btn-info btn-sm">Info</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>BTC</td>
                                    <td>0.34256400</td>
                                    <td>26.78</td>
                                    <td>7.00%</td>
                                    <td>5 dias</td>
                                    <td>
                                        <Button className="btn btn-success btn-sm mr-1 margin-right: 1rem">Vender Posição</Button>
                                        <Button className="btn btn-info btn-sm">Info</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>BTC</td>
                                    <td>0.34256400</td>
                                    <td>26.78</td>
                                    <td>7.00%</td>
                                    <td>5 dias</td>
                                    <td>
                                        <Button className="btn btn-success btn-sm mr-1 margin-right: 1rem">Vender Posição</Button>
                                        <Button className="btn btn-info btn-sm">Info</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Pagination>
                            <PaginationItem>
                                <PaginationLink previous tag="button"></PaginationLink>
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
                                <PaginationLink tag="button">4</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink next tag="button"></PaginationLink>
                            </PaginationItem>
                        </Pagination>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default TablePosicoes;

