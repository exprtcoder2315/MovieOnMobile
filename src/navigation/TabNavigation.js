


// navigations
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import Favorite from "../screens/Favorite";
import Features from "../screens/features";
import { FeaturesIcon, HomeIcon, Shape } from "../assests/Images";
import { Image, View } from "react-native";


// global stack veriable
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    //---------- return main view of drawer

    return (
        <Tab.Navigator
            initialRouteName={"Home"}
            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: '#fff', height: 60, borderTopWidth: 0 },
                tabBarIcon: ({ focused, color, size }) => {

                    let Icon
                    if (route.name === 'Home') {

                        Icon = <View
                            style={{
                                paddingBottom: 10,
                            }}
                        >
                            <Image
                                source={HomeIcon}
                                resizeMode='contain'
                                style={{ tintColor: focused ? '' : "#BCBCCD" }}
                            />
                        </View>

                    } else if (route.name === 'Favorite') {

                        Icon = <View
                            style={{
                                paddingBottom: 10,
                            }}
                        >
                            <Image
                                source={Shape}
                                resizeMode='contain'
                                style={{ tintColor: focused ? '#110E47' : "" }}
                            />
                        </View>

                    } else if (route.name === 'Features') {

                        Icon = <View
                            style={{
                                paddingBottom: 10,
                            }}
                        >
                            <Image
                                source={FeaturesIcon}
                                resizeMode='contain'
                                style={{ tintColor: focused ? '#110E47' : "" }}
                            />
                        </View>

                    }

                    // You can return any component that you like here!
                    return <View>
                        {
                            Icon
                        }
                    </View>

                },
                tabBarLabel: () => { return null },

            })}
        >

            <Tab.Screen
                options={{ headerShown: false }}
                name="Home"
                component={Home}
            />

            <Tab.Screen
                options={{ headerShown: false }}
                name="Favorite"
                component={Favorite}
            />

            <Tab.Screen
                options={{ headerShown: false }}
                name="Features"
                component={Features}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation;