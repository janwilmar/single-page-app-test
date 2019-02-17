import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

// import App from '../ui/components/App';
import Register from './../ui/components/Register/index.jsx';

const history = createBrowserHistory();

const publicPage = Component => (
    !Meteor.userId() ?
        <Component /> : <Redirect to="/home" />
);
const privatePage = Component => (
    Meteor.userId() ?
        <Component /> : <Redirect to="/" />
);

export const routes = (
    <div>
        <Router history={history}>
            <Switch>
                <Route exact path='/' render={() => (publicPage(Login))} />
                <Route exact path='/register' render={() => (publicPage(Register))} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </div>
);