// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import AppLoading from 'expo-app-loading';

// import navigationTheme from './app/navigation/navigationTheme';
// import OfflineNotice from './app/componets/OfflineNotice';
// import AuthNavigator from './app/navigation/AuthNavigator';
// //
// import AuthContext from './app/auth/context';
// //
// import AppNavigator from './app/navigation/AppNavigator';
// //
// import authStorage from './app/auth/storage';
// import { navigationRef } from './app/navigation/rootNavigation';
import React from 'react';
import { Button } from 'react-native';
import Notifications from 'expo-notifications';
import Screen from './app/componets/Screen';

// const [user, setUser] = useState();
// const [isReady, setIsReady] = useState(false);
// const restoreToken = async () => {
//   const token = authStorage.getUser();
//   if (token) setUser(token);
// };
// if (!isReady)
//   return (
//     <AppLoading
//       startAsync={restoreToken}
//       onError={console.warn}
//       onFinish={() => setIsReady(true)}
//     />
//   );
export default function App() {
  const showNotification = () => {
    Notifications.scheduleNotificationAsync({
      title: 'Congratulation',
      body: 'your oder was placed ',
      time: new Date().getTime() + 2000,
    });
  };
  return (
    <Screen>
      <Button title="Tap me" onPress={showNotification} />
    </Screen>
    // <AuthContext.Provider value={{ user, setUser }}>
    //   <OfflineNotice />
    //   <NavigationContainer ref={navigationRef} theme={navigationTheme}>
    //     {user ? <AppNavigator /> : <AuthNavigator />}
    //   </NavigationContainer>
    // </AuthContext.Provider>
  );
}

// secureTextEntry
// only works for ios
// clearButtonMode="always"
// keyboardType="numeric"
