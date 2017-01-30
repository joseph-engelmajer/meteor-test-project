import { Meteor } from 'meteor/meteor';

Meteor.publish('exposedUserData', function() {
  return Meteor.users.find({})
});
