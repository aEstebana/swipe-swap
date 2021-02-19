import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import AppText from '../componets/AppText';
import colors from '../config/colors';
import ListItem from '../componets/lists/ListItem';
import MoshFace from '../assets/mosh.jpg';
import ContactSellerForm from '../componets/ContactSellerForm';

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 10}
    >
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].url}
      />
      <View>
        <View style={styles.detailContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>{listing.price}</AppText>
          <View style={styles.userContainer}>
            <ListItem image={MoshFace} title="mosh" subTitle="5 listing" />
          </View>
        </View>
      </View>
      <ContactSellerForm listing={listing} />
    </KeyboardAvoidingView>
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
