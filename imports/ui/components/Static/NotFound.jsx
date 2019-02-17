import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';

const NotFound = () => (
  <Jumbotron style={__style.container}>
    <h1 className="display-3">Page not found!</h1>
    <p className="lead">The page you requested could not be found.</p>
    <hr className="my-2" />
    <p>Please go back to the homepage.</p>
    <p className="lead">
      <Button color="primary" tag={Link} to="/">Go back</Button>
    </p>
  </Jumbotron>
);

export default NotFound;

const __style = {
  container: {
    margin: '50px'
  }
}