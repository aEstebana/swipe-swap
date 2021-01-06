import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../componets/AppText';
import colors from '../config/colors';
import ListItem from '../componets/ListItem';
import MoshFace from '../assets/mosh.jpg';

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}> Red Jacket</AppText>
        <AppText style={styles.price}> $100</AppText>
        <View style={styles.userContainer}>
          <ListItem image={MoshFace} title="mosh" subTitle="5 listing" />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.secondary,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 15,
  },
});

export default ListingDetailsScreen;
