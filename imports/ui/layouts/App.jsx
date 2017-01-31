import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import AppNav from '/imports/ui/components/AppNav.jsx'
 
// App component - represents the whole app
export default class App extends Component { 
  render() {
    return(
      <div className="app-container">
        <header>
          <h1>Welcome To The Jenge Jungle Bitches</h1>
        </header>

        <AppNav />
        
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}