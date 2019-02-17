import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import {
    Container, Col, Form, FormGroup, Label, Input, Button, Row, Alert
} from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            alertColor: 'primary',
            alertMessage: '',
            alertVisibility: false,
        };
    }

    _handleOnChange = (event) => {
        const { target } = event;
        this.setState({ [target.name]: target.value });
    }

    _handleSubmitForm = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        Meteor.loginWithPassword(username, password, (err) => {
            err ?
                this._handleSetAlertProps(true, 'danger', err.reason)
                :
                this._handleSetAlertProps(true, 'success', 'Logging In...')
        })
    }

    _handleSetAlertProps = (visibility, color, message) => {
        this.setState({
            alertVisibility: visibility,
            alertColor: color,
            alertMessage: message
        });
    }

    _handleDismissAlert = () => {
        this.setState({ alertVisibility: false });
    }

    render() {
        const { username, password, alertMessage, alertVisibility, alertColor } = this.state;
        return (
            <Container style={__style.container}>
                <h2>Log In</h2>
                <Form style={__style.form} onSubmit={(e) => { this._handleSubmitForm(e) }}>
                    <Row>
                        <Col>
                            <Alert color={alertColor} isOpen={alertVisibility} toggle={this._handleDismissAlert} >
                                {alertMessage}
                            </Alert>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={{ size: 6, offset: 3 }}>
                            <FormGroup>
                                <Label for="loginUsername">Username</Label>
                                <Input
                                    type="text"
                                    name="username"
                                    id="loginUsername"
                                    onChange={this._handleOnChange}
                                    value={username}
                                    autoComplete={"off"} required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={{ size: 6, offset: 3 }}>
                            <FormGroup>
                                <Label for="loginPassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="loginPassword"
                                    onChange={this._handleOnChange}
                                    value={password}
                                    autoComplete={"off"} required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={{ size: 6, offset: 3 }}>
                            <Button>Log In</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default LoginContainer = withTracker((props) => {
    return {
        users: Meteor.users.find({}).fetch()
    };
})(Login);


const __style = {
    container: {
        textAlign: 'left',
    },
    form: {
        padding: '1em',
    }
}
