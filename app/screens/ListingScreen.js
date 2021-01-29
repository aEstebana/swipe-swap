import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import useApi from '../hooks/useApi';
import ActivityIndicator from '../componets/ActivityIndicator';
import Card from '../componets/Card';
import Button from '../componets/AppButton';
import listingsApi from '../api/listings';
import Screen from '../componets/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';
import AppText from '../componets/AppText';

function ListingScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  );
  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText> couldnt retrive listing 404 erro </AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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
