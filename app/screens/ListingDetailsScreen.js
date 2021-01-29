import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../componets/AppText';
import colors from '../config/colors';
import ListItem from '../componets/lists/ListItem';
import MoshFace from '../assets/mosh.jpg';

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price}</AppText>
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
