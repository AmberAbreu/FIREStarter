import React from 'react'
import { StyleSheet, Text, ScrollView, ImageBackground } from 'react-native'

import UserInfo from '../components/UserInfo'
import CategoryHeader from '../components/Categories'
import CategoryList from '../components/CategoryList'
import Chart from '../components/Chart'

export default function WelcomeScreen() {
  return (
    <ScrollView>
      <UserInfo/>
      <CategoryHeader/>
      <CategoryList/>
      <Chart/>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  card: {
    height: 100,
    width: 100,
    borderStyle: 'solid',
    borderColor: "black",
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContainer: {
    justifyContent:'flex-start'
  },
  loginButton: {
    width: '100%',
    height: 70,
    justifyContent: "flex-end",
    backgroundColor: "orange"
  },
  logo: {
    fontSize: 30,
    
  },
  logoContainer: {
    position:'absolute',
    top: 50,
    justifyContent:'flex-start'
  },
  registerButton: {
    width: '100%',
    height: 70,
    justifyContent: "flex-end",
    backgroundColor: "yellow"
  }
})
