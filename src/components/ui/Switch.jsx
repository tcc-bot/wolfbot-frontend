import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Switch from 'react-switch'

class WSwitch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOptions: ''
    }
  }

  render() {

    return (
      <Switch
        checked={this.props.ligado}
        onChange={() => this.props.acao(this.props.estadoAtual)}
        handleDiameter={this.props.diametro}
        offColor={this.props.corLigado}
        onColor={this.props.corDesligado}
        offHandleColor={this.props.textoDesligadoCor}
        onHandleColor={this.props.textoLigadoCor}
        height={this.props.altura}
        width={this.props.largura}
        className='react-switch'
        id={this.props.id}
      />
    );
  }
}

const mapStateToProps = state => (
  {
  })

const mapDispatchToProps = dispatch => bindActionCreators(
  {
  }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(WSwitch)
