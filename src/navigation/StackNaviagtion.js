import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from '../screens/loginAndSignup/Login';
import SignupScreen from '../screens/loginAndSignup/Signup';
import MovieDetails from '../screens/MovieDetails';
import TabNavigation from './TabNavigation';


const Stack = createStackNavigator();
const StackNaviagtion = () => {
  const options = { headerShown: false };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={options} />
      <Stack.Screen name="Signup" component={SignupScreen} options={options} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} options={options} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} options={options} />
    </Stack.Navigator>
  );
};

export default StackNaviagtion
