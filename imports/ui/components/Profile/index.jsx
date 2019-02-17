import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import {
    Container, Col, FormGroup, Label, Input, Row,
} from 'reactstrap';

class Profile extends Component {

    render() {
        const { currentUser } = this.props;
        const email = (!!currentUser) && (currentUser.emails) ? currentUser.emails[0].address : '(email)';

        return (
            <Container style={__style.container}>
                <h2>Profile</h2>
                <Row form>
                    <Col md={{ size: 6, offset: 3 }}>
                        <FormGroup>
                            <Label for="profileId">ID</Label>
                            <Input
                                type="text"
                                name="username"
                                id="profileId"
                                value={!!currentUser && currentUser._id} disabled />
                        </FormGroup>
                        <FormGroup>
                            <Label for="profileFirstName">First Name</Label>
                            <Input
                                type="text"
                                name="username"
                                id="profileFirstName"
                                value={!!currentUser && currentUser.profile.first_name} disabled />
                        </FormGroup>
                        <FormGroup>
                            <Label for="profileLastName">Last Name</Label>
                            <Input
                                type="text"
                                name="username"
                                id="profileLastName"
                                value={!!currentUser && currentUser.profile.last_name} disabled />
                        </FormGroup>
                        <FormGroup>
                            <Label for="profileEmail">Email</Label>
                            <Input
                                type="text"
                                name="username"
                                id="profileEmail"
                                value={email} disabled />
                        </FormGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withTracker(() => {
    return {
        currentUser: Meteor.user(),
    };
})(Profile);

const __style = {
    container: {
        textAlign: 'left',
    },
}