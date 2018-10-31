import React, { Component } from 'react'
import ReactLoading from 'react-loading'

class Loading extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <ReactLoading type={this.props.type} color={this.props.color} height={this.props.height} width={this.props.width} />
    );
  }
}
export default Loading
