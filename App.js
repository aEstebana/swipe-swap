// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Screen from './app/componets/Screen';
import Icon from './app/componets/Icon';
import ListItem from './app/componets/ListItem';
import pic from './app/assets/mosh.jpg';

export default function App() {
  // const handlePress = () => console.log('textpressed');
  return (
    <Screen>
      <ListItem title="My title" subTitle="my Subtitle" image={pic} />
    </Screen>
  );
}
