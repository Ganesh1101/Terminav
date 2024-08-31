import React from 'react';
import { View, StyleSheet } from 'react-native';
import SignUpComponent from '../customComponents/signup';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <SignUpComponent
        usernameField={true}
        emailField={true}
        phoneField={true}
        passwordField={true}
        confirmPasswordField={true}
        signInScreen="Login" // Navigation to Login screen after sign-up
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SignUpScreen;
