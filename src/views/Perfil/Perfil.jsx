import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, InputGroup, Label, Button } from 'reactstrap';

import Alerts from '../../containers/Components/Alerts'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Input from '../../containers/Components/Input'

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
    const { handleSubmit } = this.props

    return (
      <div className="animated fadeIn" >
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
                      <div style={{ width: '100%' }}>
                        <div className="" style={{ width: '25%', margin: 'auto' }}>
                          <img src="dist/img/account/vinne1.jpg" width="125px" height="125px"
                            style={{ display: "block", margin: "10px auto" }}></img>
                          <h5 style={{ textAlign: 'center' }}>Vinicius Rocha</h5>
                        </div>
                        <br />
                        <div style={{ width: '80%', margin: 'auto' }}>
                          <form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
                            <InputGroup className="mb-3">
                              <Col lg="1">
                                <Label >
                                  <h6>Email</h6>
                                </Label>
                              </Col>
                              <Col>
                                <Field component={Input} type="text" name="email" className="form-control" />
                              </Col>
                            </InputGroup>
                            <InputGroup className="mb-3">
                              <Col lg="1">
                                <Label>
                                  <h6>Nome</h6>
                                </Label>
                              </Col>
                              <Col>
                                <Field component={Input} type="text" name="nome" className="form-control" />
                              </Col>
                            </InputGroup>
                            <InputGroup className="mb-3">
                              <Col lg="1">
                                <Label>
                                  <h6>Genêro</h6>
                                </Label>
                              </Col>
                              <Col>
                                <Field component={Input} type="text" name="genero" className="form-control" />
                              </Col>
                            </InputGroup>
                            <Row>
                              <Button type="submit" className="btn-outline-success" style={{ margin: 'auto' }}>Salvar Alterações</Button>
                            </Row>
                          </form>
                        </div>
                      </div>
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

                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div >
    );
  }
}

Perfil = reduxForm({ form: 'formPerfil' })(Perfil)
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Perfil)
