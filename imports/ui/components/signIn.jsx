import React from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';

export const signIn = () => { 
  return (
    <div>
      <Blaze template="atForm" state="signIn"/>
    </div>
  )
}