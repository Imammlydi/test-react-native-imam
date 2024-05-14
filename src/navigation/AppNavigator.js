// AppNavigator.js atau App.js
import React from 'react';
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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => (
  <Stack.Navigator initialRouteName="ListPlanet">
    <Stack.Screen name="ListPlanet" component={ListPlanetScreen} options={{ headerShown: false }} />
    <Stack.Screen name="DetailPlanet" component={DetailPlanetScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <WishlistProvider>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let color = focused ? '#660072' : '#dbd7d3';

            if (route.name === 'Main') {
              return <HomeIcon color={color} />;
            } else if (route.name === 'Wishlist') {
              return <WishlistIcon color={color} />;
            }
          },
          tabBarLabel: ({ focused }) => {
            let color = focused ? '#660072' : '#dbd7d3';
            return (
              <Text style={{ color, fontSize: 10 }}>
                {route.name === 'Main' ? 'Home' : 'Wishlist'}
              </Text>
            );
          }
        })}
        tabBarOptions={{
          activeTintColor: '#660072',
          inactiveTintColor: '#dbd7d3', 
        }}
      >
        <Tab.Screen name="Main" component={MainStack} options={{ tabBarLabel: 'Home', headerShown: false }} />
        <Tab.Screen name="Wishlist" component={WishlistScreen} options={{ tabBarLabel: 'Wishlist', headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
    <FlashMessage position="top" style={{ marginTop: 10, marginHorizontal:10,borderRadius:10, fontFamily:'Lato-Regular'}} />
  </WishlistProvider>
);

export default AppNavigator;
