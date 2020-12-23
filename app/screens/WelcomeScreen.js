import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import backGroundImg from '../assets/background.jpg';

function WelcomeScreen(props) {
  return (
    <>
      <ImageBackground style={styles.background} source={backGroundImg} />
    </>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
export default WelcomeScreen;
