import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingScreen from '../screens/ListingScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Listings" component={ListingScreen} />
  </Stack.Navigator>
);
