import React, { Component } from 'react';
import { Row, Button, Card, CardHeader, CardBody, Table, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import TablePosicoes from './TablePosicoes'
import TableSaldo from './TableSaldo'
import Alerts from '../../containers/Components/Alerts'
import ResumoOperacoes from './ResumoOperacoes';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Alerts />
        <Row>
          <ResumoOperacoes />
          <TablePosicoes />
          <TableSaldo />
        </Row>
      </div>
    );
  }
}

export default Dashboard;
