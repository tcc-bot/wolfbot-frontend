import React, { Component } from 'react'
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap'

class ResumoInvestimento extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Col xs="12" lg="4" sm="12" >
        <Card className="card card-style">
          <CardHeader className='card-header-style'>
            <i className="fa fa-line-chart" ></i> Retorno de Investimento
          </CardHeader>
          <CardBody>
            <Row>
              <Col>
                <h6>Valor Investido:</h6>
                <h5>USDT 76,89</h5>
              </Col>
              <Col>
                <h6>Retorno Total:</h6>
                <h5 style={{ color: "#4dbd74" }}>USDT 10,00 (5%)</h5>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col className="text-center" >
                <h6>USDT Total em ativos na exchange:</h6>
                <h5>USDT 106,87</h5>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    )
  }


}

export default ResumoInvestimento
