import React, { Component } from 'react'
import { Col, Card, CardHeader, CardBody } from 'reactstrap'

import { PieChart, Pie, Cell } from 'recharts'

class ResumoOperacoes extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        const data = [
            { moeda: 'BTC', quantidade: 0.45672856 },
            { moeda: 'DASH', quantidade: 2.67543197 },
            { moeda: 'XMR', quantidade: 0.675343909 },
            { moeda: 'ETC', quantidade: 1.78909876 }
        ]

        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

        return (
            <Col xs="12" lg="8" sm="12" >
                <Card className="card" >
                    <CardHeader>
                        <i className="" ></i> Resumo de Operações
                    </CardHeader>
                    <CardBody>
                        <div className="row" >
                            <Col lg="4" >
                                <PieChart width={150} height={150}>
                                    <Pie
                                        dataKey="value"
                                        fill="#884d8"
                                        data={data}
                                        outerRadius={60}
                                        cx={80}
                                        cy={70}
                                    >
                                        {data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)}
                                    </Pie>
                                </PieChart>
                            </Col>
                            <Col lg="8" className="text-center" >
                                <h4>Total de Ordens Abertas</h4>
                                <hr className="text-white" />
                            </Col>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        )
    }


}

export default ResumoOperacoes