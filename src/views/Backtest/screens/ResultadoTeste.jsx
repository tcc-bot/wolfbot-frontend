import React, { Component } from 'react'
import { Col, Card, CardBody } from 'reactstrap'
import { connect } from 'react-redux'
import Chart from './Chart'

import { TypeChooser } from "react-stockcharts/lib/helper";


class ResultadoTeste extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleChange() {
    let resultado = this.props.result.result
    this.setState({ resultado })
    console.log(resultado)
    // let data = function(){
    //   for(){

    //   }
    // }
    // this.setState({ data })
	}

  render() {
    if (this.state == null) {
      return <div>Loading...</div>
    }
    return (
      <Col xs='12' lg='12' sm='6'>
        <Card>
          <CardBody>
            <TypeChooser onChange={this.handleChange} >
              {type => <Chart type={type} data={this.state.data} />}
            </TypeChooser>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

const mapStateToProps = state => ({
  result: state.backtest
})
export default connect(mapStateToProps)(ResultadoTeste)
