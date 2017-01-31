import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'updateUser'(userId, input) {
    Meteor.users.update(userId, { $set: { commet: input } });
  },
});
