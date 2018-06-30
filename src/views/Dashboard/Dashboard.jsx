import React, { Component } from 'react';
import { Row, Button, Card, CardHeader, CardBody, Table, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import TablePosicoes from './TablePosicoes'
import TableSaldo from './TableSaldo'
import Alerts from '../../containers/Components/Alerts'
import TablePosicoes2 from './TablePosicoes2';

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
          <TablePosicoes />
          <TableSaldo />
          <TablePosicoes2 />
        </Row>
      </div>
    );
  }
}

export default Dashboard;
