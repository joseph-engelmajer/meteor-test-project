import React, { Component } from 'react';
 
// App component - represents the whole app
export default class App extends Component {
 
  render() {
    return(
      <div className="container">
        <header>
          <h1>Welcome To The Jenge Jungle Bitches</h1>
        </header>
        <div>
          <div> <a href="/update"> Update Users </a> </div>
          <div> <a href="/signIn"> Sign In </a> </div>
          <div> <a href="/join"> Join </a> </div>
        </div>
        <ul>
          
        </ul>
      </div>
    )
  }
}