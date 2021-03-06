import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import MoshFace from '../assets/mosh.jpg';

import ListItemSeparator from '../componets/lists/ListItemSeparator';
import Screen from '../componets/Screen';
import ListItem from '../componets/lists/ListItem';
import ListemItemDeleteAction from '../componets/lists/ListemItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    descrption: 'D1',
    image: MoshFace,
  },
  {
    id: 2,
    title: 'T2',
    descrption: 'D2',
    image: MoshFace,
  },
  {
    id: 3,
    title: 'T3ewffffffffffffffdsfffdsfffffffffffffffffffffff',
    descrption:
      'Dsdfffffffffffffdsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3',
    image: MoshFace,
  },
];

function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListemItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/mosh.jpg'),
            },
          ]);
        }}
      />
    </Screen>
  );
}

// const styles = StyleSheet.create({

//   },
// });
export default MessageScreen;
