import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, InputGroup, Label, Button } from 'reactstrap';
import TableHistorico from './TableHistorico';

class Historico extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12" sm="12">
            <Card className="card">
              <CardHeader>
                <i className="fa fa-history"></i>Histórico de Transações</CardHeader>
              <CardBody>
                <TableHistorico />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Historico;
