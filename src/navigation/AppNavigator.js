import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListPlanetScreen from '../Screen/ListPlanetScreen';
import DetailPlanetScreen from '../Screen/DetailPlanetScreen';
import WishlistScreen from '../Screen/WishlistScreen';
import { WishlistProvider } from '../context/WishlistContext';
import HomeIcon from '../components/HomeIcon';
import WishlistIcon from '../components/WishlistIcon';
import { Text, StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import SplashScreen from '../components/SplashScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let color = focused ? '#660072' : '#dbd7d3';

        if (route.name === 'Home') {
          return <HomeIcon color={color} />;
        } else if (route.name === 'Wishlist') {
          return <WishlistIcon color={color} />;
        }
      },
      tabBarLabel: ({ focused }) => {
        let color = focused ? '#660072' : '#dbd7d3';
        return (
          <Text style={{ color, fontSize: 10 }}>
            {route.name === 'Home' ? 'Home' : 'Wishlist'}
          </Text>
        );
      },
    })}
    tabBarOptions={{
      activeTintColor: '#660072',
      inactiveTintColor: '#dbd7d3',
    }}
  >
    <Tab.Screen name="Home" component={ListPlanetScreen} options={{ tabBarLabel: 'Home', headerShown: false }} />
    <Tab.Screen name="Wishlist" component={WishlistScreen} options={{ tabBarLabel: 'Wishlist', headerShown: false }} />
  </Tab.Navigator>
);

const MainStack = () => (
  <Stack.Navigator initialRouteName="Tabs">
    <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="DetailPlanet" component={DetailPlanetScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <WishlistProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <MainStack />
      </NavigationContainer>
      <FlashMessage position="top" style={{ marginTop: 10, marginHorizontal: 10, borderRadius: 10, fontFamily: 'Lato-Regular' }} />
    </WishlistProvider>
  );
};

export default AppNavigator;
