import React, { Component } from 'react';

import {
    Container, Col, Form, FormGroup, Label, Input, Button, Row, Alert
} from 'reactstrap';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
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
        const { email, password, confirmPassword, firstName, lastName } = this.state;
        const accountInfo = {
            email: email,
            password: password,
            profile: {
                first_name: firstName,
                last_name: lastName
            }
        };

        if (password === confirmPassword) {
            Accounts.createUser(accountInfo, err => {
                err ?
                    this._handleSetAlertProps(true, 'danger', err.reason)
                    :
                    this._handleSetAlertProps(true, 'success', 'Registered successfully!')
            });
        } else {
            this._handleSetAlertProps(true, 'danger', 'The password and the confirmation password do not match.');
        }
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
        const { email, password, confirmPassword, firstName, lastName, alertMessage, alertVisibility, alertColor } = this.state;
        return (
            <Container style={__style.container}>
                <h2>Register</h2>
                <Form style={__style.form} onSubmit={(e) => { this._handleSubmitForm(e) }}>
                    <Row>
                        <Col>
                            <Alert color={alertColor} isOpen={alertVisibility} toggle={this._handleDismissAlert} >
                                {alertMessage}
                            </Alert>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="registerEmail">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="registerEmail"
                                    onChange={this._handleOnChange}
                                    value={email}
                                    autoComplete={"off"} required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="registerPassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="registerPassword"
                                    onChange={this._handleOnChange}
                                    value={password}
                                    autoComplete={"off"} required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="registerConfirmPassword"> Confirm Password</Label>
                                <Input
                                    type="password"
                                    name="confirmPassword"
                                    id="registerConfirmPassword"
                                    onChange={this._handleOnChange}
                                    value={confirmPassword}
                                    autoComplete={"off"} required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="registerFirstName">First Name</Label>
                                <Input
                                    type="text"
                                    name="firstName"
                                    id="registerFirstName"
                                    onChange={this._handleOnChange}
                                    value={firstName}
                                    autoComplete={"off"} required />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="registerLastName">Last Name</Label>
                                <Input
                                    type="text"
                                    name="lastName"
                                    id="registerLastName"
                                    onChange={this._handleOnChange}
                                    value={lastName}
                                    autoComplete={"off"} required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Button>Register</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}

const __style = {
    container: {
        textAlign: 'left',
    },
    form: {
        padding: '1em',
    }
}
