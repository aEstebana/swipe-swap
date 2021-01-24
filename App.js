// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './app/componets/Screen';
import AuthNavigator from './app/navigation/AuthNavigator';

const Link = () => {
  const navigation = useNavigation();
  return <Button title="Click" onPress={() => navigation.navigate('Tweets')} />;
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="Click"
      onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id} </Text>
  </Screen>
);
const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: 'dodgerblue ' },
      headerTintColor: 'white',
    }}
  >
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: 'tomato' },
        headerTintColor: 'white',
        headerShown: false,
      }}
    />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text> Account</Text>
  </Screen>
);
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'tomato',
      activeTintColor: 'white',
      inactiveBackgroundColor: '#eee',
      inactiveTintColor: 'black',
    }}
  >
    <Tab.Screen name="Feed" component={StackNavigator} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

// secureTextEntry
// only works for ios
// clearButtonMode="always"
// keyboardType="numeric"
