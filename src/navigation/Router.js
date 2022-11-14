import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import GetNews from '../screens/GetNews'

const Stack = createStackNavigator()

const Router = () => {    
  return (

    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false,headerStyle:{
      backgroundColor:'black'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
},
  }}/>
    <Stack.Screen name='GetNews' component={GetNews}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router