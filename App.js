import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  PermissionsAndroid,
  Platform
} from 'react-native';
import messaging from '@react-native-firebase/messaging';

import { NavigationContainer } from "@react-navigation/native";
import StackNaviagtion from './src/navigation/StackNaviagtion';
import store from './store';
import { Provider } from 'react-redux';
import { Notifications } from 'react-native-notifications';



const App = () => {

  React.useEffect(() => {
    // commonPermission();

    pushNotification();
    // if (Platform.OS === 'ios') {
    //   requestUserPermission()
    // } else {
    //   requestPermissionAndroid()
    // }
  }, [])

  const pushNotification = () => {
    Notifications.registerRemoteNotifications();

    Notifications.events().registerNotificationReceivedForeground((notification, completion) => {
      console.log(`Notification received in foreground: ${notification.title} : ${notification.body}`);
      completion({ alert: false, sound: false, badge: false });
    });

    Notifications.events().registerNotificationOpened((notification, completion) => {
      console.log(`Notification opened: ${notification.payload}`);
      completion();
    });


console.log(Notifications)
    Notifications.getInitialNotification()
      .then((notification) => {
        console.log("Initial notification was:", (notification));
      })
      .catch((err) => console.error("getInitialNotifiation() failed", err));

  }

  const commonPermission = async () => {

    const setting = await messaging().requestPermission();
    if (setting) {
      registerForRemoteMessaging()
    }
  }
  const requestPermissionAndroid = async () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  }
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      registerForRemoteMessaging()
    }
  }

  const registerForRemoteMessaging = async () => {

    await messaging().registerDeviceForRemoteMessages();
    messaging().setAutoInitEnabled(true);


    messaging().getToken().then(token => {

      console.log(' token >>>>>>>>>>>>>>.', token);

    }).catch(e => {

      console.log('>>>>>>>>>>>>>>.', e);
    })

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <NavigationContainer>
          <StatusBar
            barStyle={'dark-content'}
          />
          <StackNaviagtion />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>

  );
};

export default App;

