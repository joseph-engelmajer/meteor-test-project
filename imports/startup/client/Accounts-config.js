import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

AccountsTemplates.removeField('email');
AccountsTemplates.addField({
    _id: 'username',
    type: 'text',
    required: true,
    minLength: 4,
    errStr: 'Username must be at least 4 digits long',
});

Accounts.onLogin(function() {
  browserHistory.push('/update');
});