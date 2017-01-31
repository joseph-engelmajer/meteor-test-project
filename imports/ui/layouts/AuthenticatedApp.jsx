import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import AppNav from '/imports/ui/components/AppNav.jsx'
import { Router, Route, browserHistory } from 'react-router';

export default class AuthenticatedApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: null,
    };
  }

  checkAuthStatus() {
    if (Meteor.user()) {
      this.setState({ isAuthenticated: true })
    } else {
      this.setState({ isAuthenticated: false })
    }
  }

  componentWillMount() {
    if (!this.state.isAuthenticated) {
      browserHistory.push('/signIn');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.isAuthenticated) {
      browserHistory.push('/signIn');
    }
  }

  render() {
    return (
      <div className="app-container">
        <header>
          <h1>Welcome Back Fam</h1>
        </header>

        <AppNav />
        
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }

}