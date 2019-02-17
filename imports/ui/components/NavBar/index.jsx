import React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    _handleToggleNavbar = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    _handleLogout = (event) => {
        event.preventDefault();
        Meteor.logout((err) => {
            err ?
                alert(`Error: ${err.reason}`)
                :
                console.log("Loggin out...")
        });
    }

    render() {
        const { user } = this.props;
        const email = (!!user) && (user.emails) ? user.emails[0].address : '(email)';
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand tag={Link} to="/">Single Page App <small>test</small></NavbarBrand>
                    <NavbarToggler onClick={this._handleToggleNavbar} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {
                                (!!user) ?
                                    [
                                        <NavItem key={1}>
                                            <NavLink tag={Link} to="/home">Home</NavLink>
                                        </NavItem>,
                                        <NavItem key={2}>
                                            <NavLink tag={Link} to="/profile">Profile</NavLink>
                                        </NavItem>,
                                        <UncontrolledDropdown nav inNavbar key={3}>
                                            <DropdownToggle nav caret>
                                                {email}
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem onClick={this._handleLogout}>
                                                    Logout
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    ] : [
                                        <NavItem key={1}>
                                            <NavLink tag={Link} to="/">Login</NavLink>
                                        </NavItem>,
                                        <NavItem key={2}>
                                            <NavLink tag={Link} to="/register">Register</NavLink>
                                        </NavItem>
                                    ]
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBarContainer = withTracker(() => {
    return {
        user: Meteor.user(),
    };
})(NavBar);