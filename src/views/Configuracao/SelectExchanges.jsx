import React, { Component } from 'react';

import Select from 'react-select'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getExchanges } from './ConfiguracaoActions'


class SelectExchanges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOptions: ''
        }
    }

    handleChange = (selectedOptions) => {
        this.setState({ selectedOptions })
    }

    componentWillMount() {
        this.props.getExchanges()
    }

    render() {
        const { selectedOptions } = this.state
        const value = selectedOptions.value

        console.log(selectedOptions.value)
        return (
            <div>
                <Select
                    value={value}
                    onChange={this.handleChange}
                    options={this.props.data.data}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({ data: state.selectConfig.data })
const mapDispatchToProps = dispatch => bindActionCreators({ getExchanges }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SelectExchanges)