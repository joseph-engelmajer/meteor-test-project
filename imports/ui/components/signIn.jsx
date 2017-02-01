import React from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';

export const signIn = () => { 
  return (
    <div className="atForm-wrapper flex-row flex-center">
      <Blaze template="atForm" state="signIn"/>
    </div>
  )
}