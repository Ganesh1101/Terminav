import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import LoginComponent from '../customComponents/login';

const LoginScreen = () => {
 
  return (
    <LoginComponent
    username={true}
    placeholder={true}
    passwordField={true}
    rememberMeCheckbox={true}
    forgotPasswordText={true}
    signInGoogleButton={true}
    signInAppleButton={true}
    signInFacebookButton={false}
    signInMicrosoftButton={true}
    signUpScreen="Signup"
    forgotPasswordScreen="ForgotPassword"
    Next='Home'
  />

  );
};

export default LoginScreen;
