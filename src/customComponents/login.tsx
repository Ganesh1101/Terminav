import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

const LoginComponent= ({
  username = false,
  placeholder = false,
  rememberMeCheckbox = false,
  forgotPasswordText = false,
  passwordField = false,
  signInGoogleButton = false,
  signInAppleButton = false,
  signInFacebookButton = false,
  signInMicrosoftButton = false,
  signUpScreen = 'SignUpScreen', // default sign-up screen
  forgotPasswordScreen = 'ForgotPasswordScreen', // default forgot password screen
  Next='Home',
}) => {
  const [usernameValue, setUsername] = React.useState('');
  const [passwordValue, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  const [usernameError, setUsernameError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const scheme = useColorScheme(); // Determines light or dark mode
  const isDarkMode = scheme === 'dark';

  const navigation = useNavigation(); // Hook to access navigation

  const handleLogin = () => {
    let valid = true;

    if (!usernameValue) {
      setUsernameError('Username is required');
      valid = false;
    } else {
      setUsernameError('');
    }

    if (!passwordValue) {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      console.log(`Username: ${usernameValue}, Password: ${passwordValue}, Remember Me: ${rememberMe}`);
      navigation.navigate(Next);
      // // navigation.navigate('PanoramaScreen', { imageUri: 'https://picsum.photos/seed/picsum/200/300' });
      // navigation.navigate('Map360View', { lat:14.442599, lng: 79.986458 }); // San Francisco coordinates
      // // Example for San Francisco


    }
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log('Google Sign In');
  };

  const handleFacebookSignIn = () => {
    // Handle Facebook sign-in logic here
    console.log('Facebook Sign In');
  };

  const handleMicrosoftSignIn = () => {
    // Handle Microsoft sign-in logic here
    console.log('Microsoft Sign In');
  };

  const handleAppleSignIn = () => {
    // Handle Apple sign-in logic here
    console.log('Apple Sign In');
  };

  const handleSignUp = () => {
    // Navigate to the sign-up screen
    navigation.navigate(signUpScreen);
  };
  const handleForgotPassword = () => {
    // Navigate to the forgot password screen
    navigation.navigate(forgotPasswordScreen);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <Text style={[styles.title, isDarkMode && styles.titleDark]}>Login</Text>
      {username && (
        <>
          <TextInput
            style={[styles.input, isDarkMode && styles.inputDark]}
            placeholder={placeholder ? "Username" : ''}
            placeholderTextColor={isDarkMode ? '#999' : '#666'}
            value={usernameValue}
            onChangeText={setUsername}
          />
          {usernameError ? (
            <Text style={[styles.errorText, isDarkMode && styles.errorTextDark]}>{usernameError}</Text>
          ) : null}
        </>
      )}
      {passwordField && (
        <>
          <TextInput
            style={[styles.input, isDarkMode && styles.inputDark]}
            placeholder="Password"
            placeholderTextColor={isDarkMode ? '#999' : '#666'}
            value={passwordValue}
            onChangeText={setPassword}
            secureTextEntry
          />
          {passwordError ? (
            <Text style={[styles.errorText, isDarkMode && styles.errorTextDark]}>{passwordError}</Text>
          ) : null}
        </>
      )}
      {passwordField && (
        <View style={styles.rememberForgotContainer}>
          {rememberMeCheckbox && (
            <View style={styles.rememberMeContainer}>
              <CheckBox
                value={rememberMe}
                onValueChange={setRememberMe}
                tintColors={{ true: isDarkMode ? '#bb86fc' : '#6200ee', false: isDarkMode ? '#666' : '#999' }}
              />
              <Text style={[styles.rememberMeText, isDarkMode && styles.rememberMeTextDark]}>
                Remember Me
              </Text>
            </View>
          )}
          {forgotPasswordText && (
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={[styles.forgotPassword, isDarkMode && styles.forgotPasswordDark]}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      {username && passwordField && (
        <TouchableOpacity
          style={[styles.button, isDarkMode && styles.buttonDark]}
          onPress={handleLogin}
        >
          <Text style={[styles.buttonText, isDarkMode && styles.buttonTextDark]}>Login</Text>
        </TouchableOpacity>
      )}

      <Text style={[styles.orText, isDarkMode && styles.orTextDark]}>or</Text>

      {signInAppleButton && (
        <TouchableOpacity
          style={[styles.socialButton, styles.appleButton]}
          onPress={handleAppleSignIn}
        >
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/mac-os.png' }} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Sign up with Apple</Text>
        </TouchableOpacity>
      )}

      {signInGoogleButton && (
        <TouchableOpacity
          style={[styles.socialButton, styles.googleButton]}
          onPress={handleGoogleSignIn}
        >
          <Image source={{ uri: 'https://img.icons8.com/color/48/000000/google-logo.png' }} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Sign up with Google</Text>
        </TouchableOpacity>
      )}

      {signInFacebookButton && (
        <TouchableOpacity
          style={[styles.socialButton, styles.facebookButton]}
          onPress={handleFacebookSignIn}
        >
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/facebook.png' }} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Sign up with Facebook</Text>
        </TouchableOpacity>
      )}

      {signInMicrosoftButton && (
        <TouchableOpacity
          style={[styles.socialButton, styles.microsoftButton]}
          onPress={handleMicrosoftSignIn}
        >
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/microsoft.png' }} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Sign up with Microsoft</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={handleSignUp}>
        <Text style={[styles.signUpText, isDarkMode && styles.signUpTextDark]}>
          Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
  },
  containerDark: {
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  titleDark: {
    color: '#f2f2f2',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#e8e8e8',
    color: '#333',
  },
  inputDark: {
    backgroundColor: '#333',
    color: '#f2f2f2',
  },
  forgotPassword: {
    color: '#007AFF',
  },
  forgotPasswordDark: {
    color: '#bb86fc',
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  errorTextDark: {
    color: '#ff6666',
  },
  rememberForgotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    color: '#666',
    marginLeft: 8,
  },
  rememberMeTextDark: {
    color: '#bbb',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#800080',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonDark: {
    backgroundColor: '#4caf50',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextDark: {
    color: '#fff',
  },
  orText: {
    fontSize: 16,
    marginVertical: 10,
    color: '#666',
  },
  orTextDark: {
    color: '#bbb',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    marginBottom: 15,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  appleButton: {
    backgroundColor: '#fff',
  },
  googleButton: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  facebookButton: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  microsoftButton: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  socialButtonText: {
    color: '#333',
    fontSize: 16,
  },
  signUpText: {
    fontSize: 14,
    color: '#666',
  },
  signUpTextDark: {
    color: '#bbb',
  },
  signUpLink: {
    color: '#007AFF',
  },
});

export default  LoginComponent;
