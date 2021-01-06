import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../componets/ListItem';
import Screen from '../componets/Screen';
import moshFace from '../assets/mosh.jpg';
import colors from '../config/colors';
import Icon from '../componets/Icon';
import ListItemSeparator from '../componets/ListItemSeparator';

const menuItems = [
  {
    title: 'my listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'my messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];
function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Esteban Acevedo"
          subTitle="EstebanAcevedo.dev@gmail.com"
          image={moshFace}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.lightGrey,
  },
});
export default AccountScreen;
