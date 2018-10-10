import React, { Component } from 'react'
import { Row } from 'reactstrap'

import Ativos from './screens/Ativos'
import CompraManual from './screens/CompraManual'

class Carteira extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className='animated fadeIn'>
        <Row>
          <Ativos />
          <CompraManual />
        </Row>
      </div>
    )
  }
}

export default Carteira
