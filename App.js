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
import PushNotification from "react-native-push-notification";
import { LocalNotification, createNotification } from './src/common/LocalNotification';


const App = () => {

  React.useEffect(() => {
    commonPermission();
    createNotification()
  }, [])

  const commonPermission = async () => {

    const setting = await messaging().requestPermission();
    if (setting) {
      registerForRemoteMessaging()
    }
  }
  const registerForRemoteMessaging = async () => {

    await messaging().registerDeviceForRemoteMessages();
    messaging().setAutoInitEnabled(true);

    messaging().getToken().then(token => {
      console.log(' token >>>>>>>>>>>>>>.', token);
    }).catch(e => {
      console.log('>>>>>>>>>ee>>>>>.', e);
    })

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('remoteMessage',remoteMessage);
      LocalNotification()
    });
  }
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
 
    PushNotification.configure({
      onNotification: function(notification) {
        console.log('LOCAL NOTIFICATION ==>', notification)
      },
      popInitialNotification: true,
      requestPermissions: true,
    })
    PushNotification.popInitialNotification((notification) => {
      console.log('Initial Notification', notification);
    });
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

