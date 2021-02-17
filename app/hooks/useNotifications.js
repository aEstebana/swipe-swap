import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import expoPushTokensApi from '../api/expoPushTokens';

const useNotifications = (notificationListener) => {
  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    registerForPushNotifications();
    if (notificationListener)
      Notifications.addPushTokenListener(notificationListener);
  }, []);
};
export default useNotifications;