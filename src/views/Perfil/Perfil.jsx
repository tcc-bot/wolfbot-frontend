import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, InputGroup, Label, Button } from 'reactstrap';

import Alerts from '../../containers/Components/Alerts'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <div>
            <Alerts />
          </div>
          <Col xs="12" lg="12" sm="12">
            <Card className="card card card-style">
              <CardHeader>
                <i className="icon-user"></i> Perfil
              </CardHeader>
              <CardBody>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

Perfil = reduxForm({ form: 'formPerfil' })(Perfil)
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Perfil)
