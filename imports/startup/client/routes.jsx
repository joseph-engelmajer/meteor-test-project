import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
 
import '/imports/startup/accounts-config.js';
import '/imports/startup/userAccounts-config.js';
import App from '/imports/ui/layouts/App.jsx';
import AuthenticatedApp from '/imports/ui/layouts/AuthenticatedApp.jsx';
import { join } from '/imports/ui/components/join.jsx';
import { signIn } from '/imports/ui/components/signIn.jsx';
import UpdateUsersContainer from '/imports/ui/components/UpdateUsersContainer.jsx';

 
Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App } >
        <Route path="/join" component={ join } />
        <Route path="/signIn" component={ signIn } />
      </Route>
      <Route path="/app" component={ AuthenticatedApp } >
        <Route path="app/update" component={ UpdateUsersContainer } />
      </Route>
    </Router>, 
    document.getElementById('render-target')
  );
});