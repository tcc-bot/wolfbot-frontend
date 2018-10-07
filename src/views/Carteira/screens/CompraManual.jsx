import React, { Component } from 'react'
import { Col } from 'reactstrap'

import Card from '../../../components/ui/Card'
class CompraManual extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card
        xs='3'
        lg='4'
        sm='12'
        icon='fa-cart-arrow-down'
        titleHeader='Compra Manual'>
        <Col className='text-center'>
          <p className='text-white'>Crie ordens de compra manuais.</p>
          <select name='moedas' id='moedas'>
            <option value='valor1'>Valor 1</option>
            <option value='valor2' selected>Valor 2</option>
            <option value='valor3'>Valor 3</option>
          </select>
        </Col>
      </Card>
    )
  }
}

export default CompraManual
