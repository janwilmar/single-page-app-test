import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
// import App from '/imports/ui/App';
import { routes } from "../imports/routes/routes";

Meteor.startup(() => {
  render(routes, document.getElementById('react-target'));
});
