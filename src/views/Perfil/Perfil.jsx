import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, InputGroup, Label, Button } from 'reactstrap';

import Alerts from '../../components/ui/Alerts'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import DadosPessoais from './screens/DadosPessoais';
import { ChangeTabPerfil } from '../../_actions/PerfilActions'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    TabContainer.propTypes = {
      children: PropTypes.node.isRequired,
    };

  }

  handleChange = (event, value) => {
    this.props.ChangeTabPerfil(value);
  };

  render() {
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
                  <div className={PropTypes.object.isRequired}>
                    <AppBar position="static" style={{ backgroundColor: "rgb(26, 36, 44)" }}>
                      <Tabs value={this.props.tab}
                        onChange={this.handleChange}
                        indicatorColor="inherit"
                        textColor="inherit"
                        scrollable
                        scrollButtons="auto"
                      >
                        <Tab value="dados_pessoais" label="Dados Pessoais" />
                        <Tab value="alterar_senha" label="Alterar a Senha" />
                        <Tab value="atividades" label="Atividades" />
                      </Tabs>
                    </AppBar>
                    {this.props.tab == 'dados_pessoais' &&
                      <TabContainer>
                        <DadosPessoais></DadosPessoais>
                      </TabContainer>
                    }
                    {this.props.tab == 'alterar_senha' &&
                      <TabContainer>
                        Alterar a Senha
                      </TabContainer>}
                    {this.props.tab === 'atividades' &&
                      <TabContainer>
                        Atividades
                      </TabContainer>}
                  </div>
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
const mapDispatchToProps = dispatch => bindActionCreators({
  ChangeTabPerfil
}, dispatch)
const mapStateToProps = state => ({
  tab: state.profile.tab_perfil
})
export default connect(mapStateToProps, mapDispatchToProps)(Perfil)
