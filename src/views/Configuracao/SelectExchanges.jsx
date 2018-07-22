import React, { Component } from 'react';

import Select from 'react-select'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getExchanges } from './ConfiguracaoActions'


class SelectExchanges extends Component {
    constructor(props) {
        super(props);
    }



    componentWillMount() {
        this.props.getExchanges()
    }

    render() {
        console.log(this.props.data.data)
        return (
            <div>
                <Select
                    options={this.props.data.data}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({ data: state.selectConfig.data })
const mapDispatchToProps = dispatch => bindActionCreators({ getExchanges }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SelectExchanges)