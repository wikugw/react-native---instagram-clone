import React from 'react';
import { View, Image } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather'
import Logo from '../assets/images/logo.png'

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Instageram",
        headerTitleStyle: {
          fontWeight: '100'
        },
        headerLeft: () => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="camera-outline" size={35} color='black' />
          </View>
        ),
        headerTitle: () => (
          <Image source={Logo} resizeMode="contain" style={{ flex: 1, alignSelf: "center" }} />
        ),
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
            <FeatherIcon name="send" size={33} color='black' />
          </View>
        )
      }}
    />
  </HomeStack.Navigator>
)

export default HomeStackScreen