import { Meteor } from 'meteor/meteor';
import React from 'react'
import { render } from 'react-dom'; 
import { createContainer } from 'meteor/react-meteor-data';
import UpdateUsers from '/imports/ui/components/UpdateUsers.jsx'


const userDataSubscription = () => {
  const handleUsers = Meteor.subscribe('exposedUserData');
  const loading = !handleUsers.ready();
  const users = Meteor.users.find().fetch();

  return { loading, users }
}


export default UpdateUsersContainer = createContainer(userDataSubscription, UpdateUsers)


