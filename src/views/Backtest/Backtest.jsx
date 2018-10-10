import React, { Component } from 'react'
import { Row } from 'reactstrap'
import ConfigTeste from './screens/ConfigTeste'

class Backtesting extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='animated fadeIn'>
        <Row>
          <ConfigTeste />
        </Row>
      </div>
    )
  }
}

export default Backtesting
