import React, { Component } from 'react';
import { Row } from 'reactstrap';

class SelectExchanges extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <select name="moedas" id="moedas">
                <option value="valor1">Valor 1</option>
                <option value="valor2" selected>Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>
        );
    }
}

export default SelectExchanges;