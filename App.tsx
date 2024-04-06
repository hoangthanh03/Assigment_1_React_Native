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
import Update_Profile from './Screen/Update_Profile';
import Infor from './Screen/Infor';
import Deltais from './Screen/Deltais';
import Cart from './Screen/Cart';
import ItemCart from './Item/ItemCart';
import { Provider } from 'react-redux';
import store from './redux/store/store';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='Favorites' component={Favorites}/>
        <Stack.Screen name='BottomTab' component={BottomTab}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='UpdatePRF' component={Update_Profile}/>
        <Stack.Screen name='Profile' component={Infor}/>
        <Stack.Screen name='Deltais' component={Deltais}/>
        <Stack.Screen name='Cart' component={Cart}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    // <ItemCart/>
    // <ItemHome/>
  )
}

export default App