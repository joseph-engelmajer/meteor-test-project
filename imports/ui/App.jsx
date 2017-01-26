import React, { Component } from 'react';
 
import User from './User.jsx';
 
// App component - represents the whole app
export default class App extends Component {
  getUsers() {
    return [
      { _id: 1, username: "JoJo" },
      { _id: 2, username: "Cusna" },
      { _id: 3, username: "Selo" },
    ];
  }
 
  renderUsers() {
    return this.getUsers().map((user) => (
      <User key={user._id} user={user} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Edit User Greeting</h1>
        </header>
 
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}