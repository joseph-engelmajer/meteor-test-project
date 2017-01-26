import React, { Component } from 'react';
import AccountsUiWrapper from './AccountsUiWrapper.jsx'; 
 
// App component - represents the whole app
export default class App extends Component {
 
  render() {
    return(
      <div className="container">
        <header>
          <h1>Welcome To The Jenge Jungle Bitches</h1>
        </header>
        <div>
          <AccountsUiWrapper />
        </div>
        <ul>
          
        </ul>
      </div>
    )
  }
}