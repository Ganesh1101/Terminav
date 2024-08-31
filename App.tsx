import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import LoginScreen from './src/components/LoginScreen';
import SignupScreen from './src/components/SignupScreen';
import ForgotPasswordScreen from './src/components/forgotPasswordScreen';
import Map360View from './src/customComponents/mapViewScreen';
import SplashScreen from './src/components/splash';
import HomeScreen from './src/components/Dashboard';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide headers globally
          gestureEnabled: true, // Enable swipe gestures
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Use horizontal sliding transition
        }} initialRouteName='SplashScreen'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map360View" component={Map360View} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
