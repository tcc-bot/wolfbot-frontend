import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, InputGroup, Label, Button } from 'reactstrap';

import Alerts from '../../../containers/Components/Alerts';
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class DadosPessoais extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <Card className="card card card-style">
        <CardHeader>
          <i className="icon-user"></i> Dados Pessoais
              </CardHeader>
        <CardBody>

        </CardBody>
      </Card>
    );
  }
}

DadosPessoais = reduxForm({ form: 'formDadosPessoais' })(DadosPessoais)
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(DadosPessoais)
