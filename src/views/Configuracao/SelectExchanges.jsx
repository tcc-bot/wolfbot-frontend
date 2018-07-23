import React, { Component } from 'react';

import Select from 'react-select'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getExchanges, SelectOption } from './ConfiguracaoActions'


class SelectExchanges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: ''
    }
  }

  handleChange = (selectedOptions) => {
    this.setState({ selectedOptions });
    this.props.SelectOption(selectedOptions);
  }

  componentWillMount() {
    this.props.getExchanges()
  }

  render() {
    const { selectedOptions } = this.state
    const value = selectedOptions.value

    return (
      <div>
        <Select
          onChange={this.handleChange}
          options={this.props.data.data}
          value={this.props.selectedOptions}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.selectConfig.data,
  exchangeSelected: state.selectConfig.exchangeSelected
})
const mapDispatchToProps = dispatch => bindActionCreators({ getExchanges, SelectOption }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SelectExchanges)
