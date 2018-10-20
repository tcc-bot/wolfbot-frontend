import React, { Component } from 'react'
import { Card, Button, CardBody, CardFooter, CardGroup, Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as qs from 'query-string'

import Alerts from '../../../components/ui/Alerts'
import Page404 from '../Page404/Page404'

import { verifiyActiveAccount } from '../../../_actions/authActions'

class AccountActive extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.code = qs.parse(this.props.location.search).code
  }

  componentWillMount() {
    this.props.verifiyActiveAccount(this.code)
  }

  render() {
    if (this.props.accountActive) {
      return (
        <div className='app flex-row align-items-center ComponentAuth'>
          <Alerts />
          <Container className='ContainerAuth'>
            <Row className='justify-content-center'>
              <Col md='8'>
                <CardGroup>
                  <Card className='cardAccount card p-4'>
                    <CardBody>
                      <img src='dist/img/account/done.png' width='125px' height='125px'
                        style={{ display: 'block', margin: '10px auto' }} />
                      <h1 style={{ textAlign: 'center' }}>Sua conta foi ativada!</h1>
                      <p className='text-white' style={{ textAlign: "center" }}>Acesse sua conta com seu email e senha</p>
                    </CardBody>
                    <CardFooter className='pageCardFooter p-4'>
                      <Row className='justify-content-center'>
                        <p className='pageCardText text-muted'>Entrar em sua conta?</p>
                        <Link to='/login'><Button color='link' className='px-0'>Login</Button></Link>
                      </Row>
                    </CardFooter>
                    <CardFooter className='pageCardFooter p-4'>
                      <Row className='justify-content-center'>
                        <img src='dist/img/template/logo-icon.svg' width='30px' height='30px'
                          style={{ display: 'block', margin: '10px auto' }} />
                      </Row>
                      <p style={{ textAlign: 'center' }} className='text-white'>Wolfbot</p>
                    </CardFooter>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container >
        </div >

      )
    }
    else {
      return (
        <Page404 />
      )
    }
  }
}

const mapStateToProps = (state) => ({
  accountActive: state.auth.accountActive
})
const mapDispatchToProps = dispatch => bindActionCreators({ verifiyActiveAccount }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AccountActive)

