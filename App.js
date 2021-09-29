import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button , Platform, } from 'react-native';

import HomeScreen from './app/screens/HomeScreen'
import DetailsScreen from './app/screens/DetailsScreen'
import AnalyticsScreen from './app/screens/AnalyticsScreen'
//Redux
import {Provider} from 'react-redux'
import store from './app/store'

import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {createBottomTabNavigator, } from '@react-navigation/bottom-tabs'




const HomeStack = createNativeStackNavigator()

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
    screenOptions={{headerShown: false}}
    >
          <HomeStack.Screen name="HomeScreen" component={HomeScreen}/>
          <HomeStack.Screen name="Details" component={DetailsScreen}/>
    </HomeStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()




export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={{headerShown: false}}
        >
          <Tab.Screen name="Home" component={HomeStackScreen}/>
          <Tab.Screen name="Analytics" component={AnalyticsScreen} />
        </Tab.Navigator> 
      
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

