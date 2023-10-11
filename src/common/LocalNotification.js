import PushNotification from "react-native-push-notification";

export const LocalNotification=()=>{

    console.log("+++++++++++++++");
    PushNotification.localNotification({
      channelId: "123344566",
      autoCancel: true,
      bigText:
        'This is local notification demo in React Native app. Only shown, when expanded.',
      subText: 'Local Notification Demo',
      title: 'Local Notification Title',
      message: 'Expand me to see more',
      vibrate: true,
      vibration: 300,
      playSound: true,
      soundName: 'default',
      // actions: '["Yes", "No"]'
    })
}

export  const createNotification = () => {
    PushNotification.createChannel(
      {
        channelId: "123344566", // (required)
        channelName: "movies", // (required)
        channelDescription: "A custom channel to categorise your custom notifications", 
        soundName: "default",
        importance: 4,
        vibrate: true, 
      },
      (created) => console.log(`createChannel returned '${created}'`)
    );
}


export const ScheduledNotification=()=>{
console.log("test");
PushNotification.localNotificationSchedule({
    //... You can use all the options from localNotifications
    message: "My Notification Message", // (required)
    // date: new Date(Date.now() + 60 * 1000), // in 60 secs
    date:new Date(new Date().getTime()+3000),
    allowWhileIdle: false, 

    repeatTime: 1, 
    channelId:'123344566'
  })
}
