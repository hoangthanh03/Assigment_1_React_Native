import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screen/Home';
import Notification from '../Screen/Notification';
import Infor from '../Screen/Infor';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: () => null,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',// màu của tabbar
          tabBarActiveTintColor: 'cyan',// màu của tab được chọn,
          tabBarInactiveTintColor: 'gray', // màu của tab không được chọn
        }
      }}>

      <Tab.Screen
        name='HomeTab'
        component={Home}
        options={{
          tabBarIcon: ({ focus }) => (
            <Image source={focus ? require('../image/home.png') : require('../image/home.png')}
              style={[ styles.icon,{tintColor: focus ? 'white' : 'gray'} ]} />)
        }} />

      <Tab.Screen
        name='FindTab'
        component={Home}
        options={{
          tabBarIcon: ({ focus }) => (
            <Image source={focus ? require('../image/find.png') : require('../image/find.png')}
            style={[ styles.icon,{tintColor: focus ? 'white' : 'gray'} ]} />)
        }} />

      <Tab.Screen
        name='NotificationTab'
        component={Notification}
        options={{
          tabBarIcon: ({ focus }) => (
            <Image source={focus ? require('../image/bell.png') : require('../image/bell.png')}
            style={[ styles.icon,{tintColor: focus ? 'white' : 'gray'} ]} />)
        }} />

      <Tab.Screen
        name='InforTab'
        component={Infor}
        options={{
          tabBarIcon: ({ focus }) => (
            <Image source={focus ? require('../image/infor.png') : require('../image/infor.png')}
            style={[ styles.icon,{tintColor: focus ? 'white' : 'gray'} ]} />)
        }} />

    </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({
  icon:{
    width:20,
    height:20
  }
})