import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator()

const Router = () => {    
  return (

    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router