import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
 
import '/imports/startup/accounts-config.js';
import App from '/imports/ui/components/App.jsx';
import { join } from '/imports/ui/components/join.jsx';
import UpdateUsersContainer from '/imports/ui/components/UpdateUsersContainer.jsx';
 
Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App } />
      <Route path="/join" component={ join } />
      <Route path="/update" component={ UpdateUsersContainer } />
    </Router>, 
    document.getElementById('render-target')
  );
});