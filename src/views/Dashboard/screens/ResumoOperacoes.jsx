import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'

import Card from '../../../components/ui/Card'

class ResumoOperacoes extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    const data = [
      { name: 'BTC', value: 30 },
      { name: 'DASH', value: 10 },
      { name: 'XMR', value: 20 },
      { name: 'ETC', value: 40 }
    ]

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

    const RADIAN = Math.PI / 180
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5
      const x = cx + radius * Math.cos(-midAngle * RADIAN)
      const y = cy + radius * Math.sin(-midAngle * RADIAN)

      return (
        <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      )
    }

    return (
      <Card
        xs='12'
        lg='8'
        sm='12'
        icon='fa-pie-chart'
        titleHeader='Resumo de Operações'>
        <Row>
          <Col lg='4' >
            <PieChart width={150} height={150}>
              <Pie
                dataKey='value'
                isAnimationActive
                data={data}
                outerRadius={60}
                cx={80}
                cy={70}
                labelLine={false}
                label={renderCustomizedLabel}
                fill='#8884d8'
              >
                {data.map((entry, index) => <Cell key={COLORS} fill={COLORS[index % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </Col>
          <Col lg='8' className='text-center' >
            <h4>Total de Ordens Abertas</h4>
            <hr />
            <Row>
              <Col className='col-info-operacoes' id='operacoes-custo'>
                <p />
                <h6>Custo</h6>
                <p>24,87653494</p>
              </Col>
              <Col className='col-info-operacoes'>
                <p />
                <h6>Resultado</h6>
                <p>35,46%</p>
              </Col>
              <Col className='col-info-operacoes'>
                <p />
                <h6>Tempo</h6>
                <p>24 dias</p>
              </Col>
              <Col className='col-info-operacoes'>
                <p />
                <h6>Nº Ordens</h6>
                <p>34</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    )
  }
}

export default ResumoOperacoes
