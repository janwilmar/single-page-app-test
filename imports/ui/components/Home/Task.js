import React, { Component } from 'react';
import { ListGroupItem, Button } from 'reactstrap';

import { Tasks } from '../../../api/tasks.js';

export default class Task extends Component {
    _handleToggleCheckbox = () => {
        Tasks.update(this.props.task._id, {
            $set: { checked: !this.props.task.checked },
        });
    }

    _handleDeleteTask = () => {
        Tasks.remove(this.props.task._id);
    }

    render() {
        const { task } = this.props;
        const taskStatus = task.checked ? 'success' : '';
        return (
            <ListGroupItem color={taskStatus}>
                {task.text}
                <span style={__style.floatLeft}>
                    <input
                        type="checkbox"
                        readOnly
                        checked={!!this.props.task.checked}
                        onClick={this._handleToggleCheckbox}
                    />
                </span>
                <span style={__style.floatRight}>
                    <Button
                        outline
                        color="danger"
                        size="sm"
                        onClick={this._handleDeleteTask}>Remove</Button>
                </span>
            </ListGroupItem>
        );
    }
}

const __style = {
    floatLeft: {
        float: 'left',
        marginRight: '10px',
    },
    floatRight: {
        float: 'right',
    }
}