import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../componets/Card';

import Screen from '../componets/Screen';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: ' red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: ' Couch in great condidtion ',
    price: 1000,
    image: require('../assets/couch.jpg'),
  },
];

function ListingScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
});
export default ListingScreen;
