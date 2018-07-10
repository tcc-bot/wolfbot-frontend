import React, { Component } from 'react';
import { Row } from 'reactstrap';
import TableSaldo from './TableSaldo'
import CompraManual from './CompraManual'

class Carteira extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <div className="animated fadeIn">
                <Row>
                    <TableSaldo />
                    <CompraManual />
                </Row>
            </div>
        );
    }
}

export default Carteira;