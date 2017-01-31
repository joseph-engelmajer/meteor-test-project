import React from 'react';

export default class UpdateUsers extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      userId: '',
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  requireAuth() {
    if (!Meteor.user()) {
      browserHistory.push('/signIn')
    }
  }

  handleSelectChange(event) {
    this.setState({ userId: event.target.value });
  }

  handleInputChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    let userId = this.state.userId
    let comment = this.state.comment

    Meteor.call('updateUser', userId, comment, (err, resp) => {
      console.log(err)
      console.log(resp)
      if (!err) {
        this.setState({ comment: '' })
      }; 
    });
  }

  render() {
    console.log({ state: this.state });

    const { loading, users } = this.props;

    const selectUsers = users.map((user) => {
      return (
        <option key={user._id} value={user._id}>
          {user.username}
        </option>
      ) 
    })

    return (
      <div id="container">
        <select id='user-select' value={this.state.userId} onChange={this.handleSelectChange}>
          <option disabled> select a user </option>
          {selectUsers}
        </select>

        <form onSubmit={this.handleSubmit}>
         <input type='text' value={this.state.comment} ref='comment' name='comment' onChange={this.handleInputChange} placeholder='add comment to user'></input>
         <input type="submit" value="Submit" onClick={this.handleSubmit}></input>
        </form>
      </div>
    ) 
  };
};

UpdateUsers.propTypes = {
  users: React.PropTypes.array,
  loading: React.PropTypes.bool,
};