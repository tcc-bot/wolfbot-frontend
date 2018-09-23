import React, { Component } from 'react'
import { Row } from 'reactstrap'
import TableSaldo from './components/TableSaldo'
import CompraManual from './components/CompraManual'

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
          <TableSaldo />
          <CompraManual />
        </Row>
      </div>
    )
  }
}

export default Carteira
