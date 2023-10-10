// Import React and Component
import React, { useState, createRef } from 'react';
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
import { facebook, google } from '../../assests/Images';
import CustomTextInput from '../../common/CustomTextInput';
import { loginRequest } from '../../Redux/Action/action';
import { useDispatch, useSelector } from 'react-redux';
import CustomLoder from '../../common/Loder';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { login_data_pocket } = useSelector(state => state.MovieData)
  const [error, setError] = useState(false)
  const [loading, setLoading] = React.useState(false)
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  React.useEffect(() => {
    if (login_data_pocket?.status) {
      setLoading(false)
      navigation.replace('TabNavigation')

    } else if (login_data_pocket?.status === false) {
      setLoading(false)
      alert(login_data_pocket?.error)
    }
  }, [login_data_pocket])

  const handleLogin = () => {
    if (!userData.email) {
      setError(true)
      return;
    }
    if (!userData.password) {
      setError(true)
      return;
    }
    setLoading(true)
    dispatch(loginRequest({
      key: 'login_data_pocket',
      email: userData?.email,
      password: userData?.password,
    }))

  }

  if (loading) {
    return <CustomLoder />
  } else {
    return (
      <View style={styles.mainBody}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            alignContent: 'center',
            marginTop: 50
          }}>
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
                <Text style={{ color: "red", marginVertical: -5, textAlign: "center" }}>password is required</Text>
              }
              {/* <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 50, marginVertical: 10 }}> */}
                {/* <TouchableOpacity style={{ flexDirection: "row" }}>

                  <Image
                    source={google}
                    style={{
                      width: 30,
                      height: 30,
                      resizeMode: 'contain',
                      marginRight: 8
                    }}
                  />
                  <Text style={{ color: "red", textAlign: "center", marginTop: 5, fontWeight: "500", fontSize: 17 }}>Google</Text>

                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: "row" }}>

                  <Image
                    source={facebook}
                    style={{
                      width: 35,
                      height: 35,
                      resizeMode: 'contain',
                      marginRight: 8
                    }}
                  />

                  <Text style={{ color: "#0c3fa6", textAlign: "center", marginTop: 7, fontWeight: "500", fontSize: 17 }}>FaceBook</Text>

                </TouchableOpacity> */}

              {/* </View> */}
              
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() =>
                  handleLogin()
                }
              >
                <Text style={styles.buttonTextStyle}>LOGIN</Text>
              </TouchableOpacity>
              <Text
                style={styles.registerTextStyle}
                onPress={() => navigation.navigate('Signup')}>
                New Here ? Register
              </Text>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    );
  }
};
export default LoginScreen;

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
    marginTop: 10,
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