import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import AppNav from '/imports/ui/components/AppNav.jsx';
import { Router, Route, browserHistory } from 'react-router';

export default class AuthenticatedApp extends Component {

  componentWillMount() {
     if (!Meteor.user()) {
      browserHistory.push('/signIn');
    }
  }

  render() {
    return (
      <div className="app-container">
        <header className="title flex-row flex-center">
          <h1>Welcome Back Fam</h1>
        </header>
        
        <AppNav />

        <div className="child-container flex-row flex-center">
          {this.props.children}
        </div>
      </div>
    );
  }

}