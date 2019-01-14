import React, { Component } from 'react'
import { Card, CardBody, CardFooter, CardGroup, Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

class Page404 extends Component {
  render () {
    return (
      <div className='app flex-row align-items-center ComponentAuth'>
        <Container className='ContainerAuth'>
          <Row className='justify-content-center'>
            <Col md='8'>
              <CardGroup>
                <Card className='cardAccount card p-4'>
                  <CardBody>
                    <img src='dist/img/account/404.png' width='160px' height='70px'
                      style={{ display: 'block', margin: '10px auto' }} />
                    <h1 style={{ textAlign: 'center' }}>Oops!</h1>
                    <p className='text-white' style={{ textAlign: 'center' }}>A página que você está procurando não foi encontrada.</p>
                  </CardBody>
                  <CardFooter className='pageCardFooter p-4'>
                    <Row className='justify-content-center'>
                      <InputGroup className='input-prepend'>
                        <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                            <i className='fa fa-search' />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input size='16' type='text' placeholder='O que você está procurando?' />
                        <InputGroupAddon addonType='append'>
                          <Button color='info'>Buscar</Button>
                        </InputGroupAddon>
                      </InputGroup>
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

export default Page404
