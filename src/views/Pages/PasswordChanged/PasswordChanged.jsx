import React, { Component } from 'react'
import { Card, Button, CardBody, CardFooter, CardGroup, Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

import Alerts from '../../../components/ui/Alerts'

class PasswordChanged extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='app flex-row align-items-center ComponentAuth'>
        <Alerts />
        <Container className='ContainerAuth'>
          <Row className='justify-content-center'>
            <Col md='8'>
              <CardGroup>
                <Card className='cardAccount card p-4'>
                  <CardBody>
                    <img src='dist/img/account/password_changed.png' width='125px' height='125px'
                      style={{ display: 'block', margin: '10px auto' }} />
                    <h1 style={{ textAlign: 'center' }}>Sua senha foi alterada!</h1>
                    <p className='text-white' />
                  </CardBody>
                  <CardFooter className='pageCardFooter p-4'>
                    <Row className='justify-content-center'>
                      <p className='pageCardText text-muted'>Login?</p>
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
}

export default PasswordChanged
