// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, createRef, useEffect } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import CustomTextInput from '../../common/CustomTextInput';
import { signupRequest } from '../../Redux/Action/action';
import CustomLoder from '../../common/Loder';

const SignupScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { signup_data_pocket } = useSelector(state => state.MovieData)
  const [error, setError] = useState(false)
  const [loading, setLoading] =  React.useState(false)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
useEffect(()=>{
    if (signup_data_pocket?.status) {
      navigation.replace('TabNavigation')
      setLoading(false)
    }else if(signup_data_pocket?.status===false){
      alert(signup_data_pocket?.error)
      setLoading(false)
    }

  }, [signup_data_pocket])
  const handleSignup = () => {
    if (!userData.name) {
      setError(true)
      return;
    }
    if (!userData.email) {
      setError(true)
      return;
    }
    if (!userData.password) {
      setError(true)
      return;
    }
    if (!userData.confirmPassword) {
      setError(true)
      return;
    }
    if (userData.confirmPassword !== userData.password) {
      setError(true)
      return;
    };
    setLoading(true)
    dispatch(signupRequest({
      key: 'signup_data_pocket',
      email: userData?.email,
      password: userData.password,
      name: userData.name
    }))

  }
  if (loading) {
    return <CustomLoder />
} else{
  return (
    <View style={styles.mainBody}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignContent: 'center',
          marginTop: 50
        }}

        automaticallyAdjustKeyboardInsets={true}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tmdb.new.logo.svg/512px-Tmdb.new.logo.svg.png" }}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 60,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <CustomTextInput
                onChangeText={(text) => { setUserData({ ...userData, name: text }), setError(false) }
                }
                placeholder="Enter Namne"
                value={userData?.name}

              />
            </View>
            {
              error && !userData.name &&
              <Text style={{ color: "red", marginVertical: -5, textAlign: "center" }}>Name is required</Text>}
            <View style={styles.SectionStyle}>
              <CustomTextInput
                onChangeText={(text) => { setUserData({ ...userData, email: text }), setError(false) }
                }
                placeholder="Enter Email"
                value={userData?.email}

              />
            </View>
            {
              error && !userData.email &&
              <Text style={{ color: "red", marginVertical: -5, textAlign: "center" }}>Email is required</Text>
            }

            <View style={styles.SectionStyle}>
              <CustomTextInput
                onChangeText={(text) => { setUserData({ ...userData, password: text }), setError(false) }
                }
                placeholder="Enter Password"
                secureTextEntry={true}
                value={userData?.password}

              />
            </View>
            {
              error && !userData.password &&
              <Text style={{ color: "red", marginVertical: -5, textAlign: "center" }}>Password is required</Text>
            }
            <View style={styles.SectionStyle}>
              <CustomTextInput
                onChangeText={(text) => { setUserData({ ...userData, confirmPassword: text }), setError(false) }
                }
                placeholder="Enter Confirm Password"
                secureTextEntry={true}
                value={userData?.confirmPassword}

              />
            </View>
            {
              error && !userData.confirmPassword ?
                <Text style={{ color: "red", marginVertical: -5, textAlign: "center" }}>Confirm Password is required</Text>
                :
                error && userData.confirmPassword && userData.password &&
                <Text style={{ color: "red", marginVertical: -5, textAlign: "center" }}>password and Confirm Password Not Mach</Text>
            }
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => handleSignup()}
            >
              <Text style={styles.buttonTextStyle}>SIGNUP</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
          }
};
export default SignupScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: '600',

  },
  registerTextStyle: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});