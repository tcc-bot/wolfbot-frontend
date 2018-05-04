import React, { Component } from 'react';
import { Row } from 'reactstrap';
import Alerts from '../../containers/Components/Alerts'

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

        </Row>
      </div>
    );
  }
}

export default Dashboard;
