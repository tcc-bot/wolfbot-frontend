import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class LoginValidation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: this.props.error
        };

        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    render() {
        console.log('Validation ' + this.state.visible)
        return (
            <div>
                <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
                    I am an alert and I can be dismissed!
            </Alert>
            </div >
        )
    }
}

export default LoginValidation;