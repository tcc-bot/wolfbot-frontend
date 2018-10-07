import React, { Component } from 'react'
import { Row } from 'reactstrap'
import TableSaldo from './screens/TableSaldo'
import CompraManual from './screens/CompraManual'

class Carteira extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
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
