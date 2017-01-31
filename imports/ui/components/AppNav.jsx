import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Router, Route, browserHistory } from 'react-router';

export default class AppNav extends Component {

  logOut () {
    console.log("Logged Out")
    AccountsTemplates.logout();
    browserHistory.push('/')
  }

  render(){    
    const signIn = <li className="nav-item"> <a href="/signIn"> Sign In </a> </li>;
    const signOut = <li className="nav-item" onClick={this.logOut}> Log Out </li>;

    return (
      <div className="main-nav">
        <li> <a href="/update"> Update Users </a> </li>
        { Meteor.user() ? signOut : signIn }
        <li> <a href="/join"> Join </a> </li>
      </div>
    )
  }
}

        