import React, { Component } from 'react'
import { Card, CardHeader, CardBody, Col, Row } from 'reactstrap';

class WCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Col xs={this.props.xs} lg={this.props.lg} sm={this.props.sm}>
        <Card className='wf-card card'>
          <CardHeader className='wf-card-header'>
            <i className={`fa ${this.props.icon}`} /> {this.props.titleHeader}
          </CardHeader>
          <CardBody style={{ color: '#FFFFFF' }}>
            {this.props.children}
          </CardBody>
        </Card>
      </Col>
    )
  }
}
export default WCard
