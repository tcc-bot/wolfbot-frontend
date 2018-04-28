import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Axios from "axios";
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginValidation from './LoginValidation';


const URL = 'http://localhost:3003/account/login'

class Login extends Component {

  constructor(props) {
    super(props);
    this.usernameChange = this.usernameChange.bind(this)
    this.passwordChange = this.passwordChange.bind(this)
    this.login = this.login.bind(this)
    this.state = { email: "", password: "", authetication: false, errors: false };
    this.errors = false;
  }

  usernameChange(e) {
    this.setState({ ...this.state, email: e.target.value })
  }
  passwordChange(e) {
    this.setState({ ...this.state, password: e.target.value })
  }

  login() {
    Axios.post(URL, {
      email: this.state.email, password: this.state.password
    }, {
        headers: {
          'Content-type': 'application/json'
        },
      }).then(resp => {
        this.setState({ ...this.state, authetication: true });
      }
      ).catch(error => {
        this.setState({ ...this.state, errors: true })
      })
  }

  render() {
    if (this.state.authetication == false) {
      return (
        <div className="app flex-row align-items-center">
          <Container>
            <LoginValidation error={this.errors} />
            <Row className="justify-content-center">
              <Col md="8">
                <CardGroup>
                  <Card className="p-4">
                    <CardBody>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" onChange={this.usernameChange} placeholder="Username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" onChange={this.passwordChange} placeholder="Password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.login}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                    <CardBody className="text-center">
                      <div>
                        <h2>Sign up</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                        <Button color="primary" className="mt-3" active>Register Now!</Button>
                      </div>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>

      );
    }
    else {
      return (<Redirect from="/login" to="/dashboard" />);
    }
  }
}

export default Login;
