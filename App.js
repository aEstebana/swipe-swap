import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import jwtDecode from 'jwt-decode';
import AppLoading from 'expo-app-loading';
import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from './app/componets/OfflineNotice';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import AppNavigator from './app/navigation/AppNavigator';
import authStorage from './app/auth/storage';

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  const restoreToken = async () => {
    const token = authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };
  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreToken}
        onError={console.warn}
        onFinish={() => setIsReady(true)}
      />
    );
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

// secureTextEntry
// only works for ios
// clearButtonMode="always"
// keyboardType="numeric"
