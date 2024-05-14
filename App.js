import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, StatusBar, Platform } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';
import { FontProvider, FontContext } from './src/context/FontContext';


const App = () => {
  return( 
    <FontProvider>
<FontContext.Consumer>
        {({ isFontLoaded }) =>
          isFontLoaded ? (
            <AppNavigator />
          ) : (
            <View style={styles.container}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )
        }
      </FontContext.Consumer>
    </FontProvider>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
