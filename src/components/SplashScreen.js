import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import PlanetIcon from '../components/PlanetIcon'; // Ensure correct import path

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#660072" barStyle="light-content" />
      <PlanetIcon size={100} color="white" />
      <Text style={styles.text}>My Planet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#660072',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    color: 'white',
    fontSize: 24,
    fontFamily:'Lato-Bold'
  },
});

export default SplashScreen;
