import React, { Component } from 'react';

import Select from 'react-select'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getExchanges, ExchangeSelectOption } from '../../../_actions/ConfiguracaoActions'


class SelectExchanges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: ''
    }
  }

  handleChange = (selectedOptions) => {
    this.setState({ selectedOptions });
    this.props.ExchangeSelectOption(selectedOptions);
  }

  componentWillMount() {
    this.props.getExchanges()
  }

  render() {

    const custonStyle = {
      control: styles => ({
        ...styles,
        backgroundColor: '#515b65',
        border: '1px solid #23282c'
      }),
      option: (styles, { isDisabled, isFocused, isSelected }) => {
        return {
          ...styles,
          backgroundColor: isDisabled ? '#515b65' : isSelected ? '#000000' : isFocused ? 'rgb(26, 36, 44)' : '#515b65',
          color: isDisabled ? '#000' : isSelected ? '#e4e7ea' : null,
          cursor: isDisabled ? 'not-allowed' : 'default',
        };
      },
      input: styles => ({
        ...styles,
        color: '#e4e7ea',
      }),
      placeholder: styles => ({
        ...styles,
        color: '#e4e7ea'
      }),
      singleValue: styles => ({
        ...styles,
        color: '#e4e7ea'
      })
    };
    return (
      <div>
        <Select
          onChange={this.handleChange}
          options={this.props.exchanges}
          value={this.props.selectedOptions}
          styles={custonStyle}
        />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    exchanges: state.selectConfig.exchanges,
    exchangeSelected: state.selectConfig.exchangeSelected
  })
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getExchanges,
    ExchangeSelectOption
  }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SelectExchanges)
