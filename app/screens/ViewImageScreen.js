import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import chairImg from '../assets/chair.jpg';
import colors from '../config/colors';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" style={styles.materialIcons} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          style={styles.materialIcons}
        />
      </View>
      <Image resizeMode="contain" style={styles.image} source={chairImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  materialIcons: {
    color: colors.white,
    fontSize: 40,
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default ViewImageScreen;
