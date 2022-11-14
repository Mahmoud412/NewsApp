import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import GetNews from '../screens/GetNews';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Top News"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="GetNews" component={GetNews} options={{headerStyle:{
          backgroundColor:'black'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:18
    },}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
