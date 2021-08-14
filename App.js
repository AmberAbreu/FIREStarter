import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button , Platform, } from 'react-native';
import {createBottomTabNavigator, } from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import HomeScreen from './app/screens/HomeScreen'
import AnalyticsScreen from './app/screens/AnalyticsScreen'
//Redux
import {Provider} from 'react-redux'
import store from './app/store'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
// import auth from '@react-native-firebase/auth';

import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import DetailsScreen from './app/screens/DetailsScreen'

const Stack = createNativeStackNavigator()

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Analytics: AnalyticsScreen
  },
  {
    initialRouteName: 'Home'
  }
)
const AppContainer = createAppContainer(bottomTabNavigator)


export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Details" component={DetailsScreen}/>
        </Stack.Navigator>
      
      </NavigationContainer>
      
    </Provider>
    
    
  );
}



const styles = StyleSheet.create({
  baseText: {
    color: 'red',
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

