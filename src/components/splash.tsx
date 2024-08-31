import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
//   const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/logo(Terminav).png')} // Replace with your image path
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Change to your desired background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 180, // Adjust size according to your image
    height: 180,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
