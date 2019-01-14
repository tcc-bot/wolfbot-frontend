import React, { Component } from 'react'
import { Card, CardBody, CardFooter, CardGroup, Col, Container, Row } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Alerts from '../../../components/ui/Alerts'
import Loading from '../../../components/ui/Loading'

class LoadingPage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {

  }

  render () {
    return (
      <div className='app flex-row align-items-center ComponentAuth'>
        <Alerts />
        <Container>
          <Row className='justify-content-center'>
            <Col md='8'>
              <h4 style={{ textAlign: 'center', color: '#20a8d8' }}>Carregando!</h4>
              <div style={{ margin: '0px auto', width: '20%' }}>
                <Loading style={{ textAlign: 'center' }} type='bars' color='#20a8d8' heigth='20%' width='100%' />
              </div>
            </Col>
          </Row>
        </Container >
      </div >
    )
  }
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(LoadingPage)
