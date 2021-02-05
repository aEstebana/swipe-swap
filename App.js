import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from './app/componets/OfflineNotice';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
  const [user, setUser] = useState();
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
