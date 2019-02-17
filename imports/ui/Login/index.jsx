import React, { Component } from 'react';

import {
    Container, Col, Form, FormGroup, Label, Input, Button, Row, Alert
} from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    _handleOnChange = (event) => {
        const { target } = event;
        this.setState({ [target.name]: target.value });
    }

    _handleSubmitForm = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
    }

    render() {
        const { username, password } = this.state;
        return (
            <Container style={__style.container}>
                <h2>Log In</h2>
                <Form style={__style.form} onSubmit={(e) => { this._handleSubmitForm(e) }}>
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
