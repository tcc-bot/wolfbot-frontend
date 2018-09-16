import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, InputGroup, Label, Button } from 'reactstrap';

import Alerts from '../../containers/Components/Alerts'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
                <div className={PropTypes.object.isRequired.root}>
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      style={{ backgroundColor: "#192024" }}
                      expandIcon={<ExpandMoreIcon />}>
                      <Typography className={PropTypes.object.isRequired.heading}>
                        <a class="text-white">Dados pessoais</a>
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="card-style">
                      <h4>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </h4>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      style={{ backgroundColor: "#192024" }}
                      expandIcon={<ExpandMoreIcon />}>
                      <Typography className={PropTypes.object.isRequired.heading}>
                        <a class="text-white">Alterar a senha</a>
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="card-style">
                      <h4>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                      </h4>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
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
