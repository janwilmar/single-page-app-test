import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import {
    Form, FormGroup, InputGroup, ListGroup, Label, Input, Container, Row, Col, InputGroupAddon,
    Button,
} from 'reactstrap';

import { Tasks } from '../../../api/tasks.js';
import Task from './Task.js';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            task: '',
        }
    }

    _handleSubmitForm(event) {
        event.preventDefault();
        const { task } = this.state;
        Tasks.insert({
            text: task,
            createdAt: new Date(),
            checked: false,
            owner: Meteor.userId(),
        }, (err) => {
            err ?
                console.log(err.reason)
                :
                this.setState({ task: '' })
        });
    }

    _renderTasks() {
        return this.props.tasks.map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    _handleOnChange = (event) => {
        const { target } = event;
        this.setState({ [target.name]: target.value });
    }

    render() {
        const { task } = this.state;
        return (
            <Container style={__style.container}>
                <h2>Home <small>Todo list ({this.props.incompleteCount})</small></h2>
                <Form style={__style.form} onSubmit={(e) => { this._handleSubmitForm(e) }}>
                    <Row form>
                        <Col md={{ size: 6, offset: 3 }}>
                            <FormGroup>
                                <InputGroup>
                                    <Input
                                        type="text"
                                        name="task"
                                        id="homeTask"
                                        onChange={this._handleOnChange}
                                        placeholder={'Type a task here...'}
                                        value={task}
                                        autoComplete={'off'} required />
                                    <InputGroupAddon addonType="append">
                                        <Button>Save</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                        <ListGroup>
                            {this._renderTasks()}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withTracker(() => {
    return {
        tasks: Tasks.find({ owner: Meteor.userId() }, { sort: { createdAt: -1 } }).fetch(),
        incompleteCount: Tasks.find({ owner: Meteor.userId(), checked: { $ne: true } }).count(),
        currentUser: Meteor.user(),
    };
})(Home);

const __style = {
    container: {
        textAlign: 'left',
    },
    form: {
        padding: '1em',
    }
}