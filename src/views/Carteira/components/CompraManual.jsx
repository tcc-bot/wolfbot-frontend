import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Col } from 'reactstrap';


class TableSaldo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Col xs="3" lg="4" sm="12">
        <Card className="card card-style">
          <CardHeader>
            <i className="fa fa-cart-arrow-down"></i> Compra Manual
                    </CardHeader>
          <CardBody>
            <Col className="text-center">
              <p>Crie ordens de compra manuais.</p>
              <select name="moedas" id="moedas">
                <option value="valor1">Valor 1</option>
                <option value="valor2" selected>Valor 2</option>
                <option value="valor3">Valor 3</option>
              </select>
            </Col>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default TableSaldo;

