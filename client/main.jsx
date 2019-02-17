import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { routes, onAuthChange} from "../imports/routes/routes";

import 'bootstrap/dist/css/bootstrap.min.css';

Tracker.autorun(function () {
  const authenticated = !!Meteor.userId();
  onAuthChange(authenticated);
});

Meteor.startup(() => {
  render(routes, document.getElementById('react-target'));
});
