import React, { Component, PropTypes } from 'react';
 
// User component - represents a single user 
export default class User extends Component {
  render() {
    return (
      <li>{this.props.user.username}</li>
    );
  }
}
 
User.propTypes = {
  user: PropTypes.object.isRequired,
};