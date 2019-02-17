import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import Register from './../ui/components/Register/index.jsx';
import Login from './../ui/components/Login/index.jsx';
import NavBar from './../ui/components/NavBar/index.jsx';
import Profile from './../ui/components/Profile/index.jsx';
import Home from './../ui/components/Home/index.jsx';
import NotFound from './../ui/components/Static/NotFound.jsx';

const history = createBrowserHistory();
const unauthenticatedPages = ['/register', '/'];
const authenticatedPages = ['/home', '/profile'];
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
            <NavBar />
        </Router>

        <Router history={history}>

            <Switch>
                <Route exact path='/' render={() => (publicPage(Login))} />
                <Route exact path='/register' render={() => (publicPage(Register))} />
                <Route exact path='/home' render={() => (privatePage(Home))} />
                <Route exact path='/profile' render={() => (privatePage(Profile))} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </div>
);

export const onAuthChange = function (authenticated) {
    const path = history.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(path);
    const isAuthenticatedPage = authenticatedPages.includes(path);
    if (authenticated && isUnauthenticatedPage) {
        return history.replace("/home")
    } else if (!authenticated && isAuthenticatedPage) {
        return history.replace("/")
    }
};