import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screen/Home';
import Welcome from './Screen/Welcome';
import Favorites from './Screen/Favorites';
import BottomTab from './Component_custom/BottomTab';
import Login from './Screen/Login';
import Register from './Screen/Register';
import ItemHome from './Item/ItemHome';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='Favorites' component={Favorites}/>
        <Stack.Screen name='BottomTab' component={BottomTab}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <ItemHome/>
  )
}

export default App