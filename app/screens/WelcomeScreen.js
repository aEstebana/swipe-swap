import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import backGroundImg from '../assets/background.jpg';
import redLogo from '../assets/logo-red.png';
import AppButton from '../componets/AppButton';

function WelcomeScreen(props) {
  return (
    <>
      <ImageBackground
        blurRadius={10}
        style={styles.background}
        source={backGroundImg}
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={redLogo} />
          <Text style={styles.tagline}> Swap, Swipe and Save </Text>
        </View>
        <View style={styles.buttonConatiner}>
          <AppButton title="Login" />
          <AppButton title="Register" color="secondary" />
        </View>
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonConatiner: {
    padding: 20,
    width: '100%',
  },
  tagline: { fontSize: 25, fontWeight: '600', paddingVertical: 20 },
  logo: { width: 100, height: 100 },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
});

export default WelcomeScreen;
