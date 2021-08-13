import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

export default function WelcomeScreen() {
  return (
    <ImageBackground source={require('../assets/background.jpeg')}
    style={styles.background}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>🔥</Text>
        <Text>Get personal with your finances</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  loginButton: {
    width: '100%',
    height: 70,
    justifyContent: "flex-end",
    backgroundColor: "orange"
  },
  logo: {
    fontSize: 100,
    
  },
  logoContainer: {
    position:'absolute',
    top: 50,
    alignItems:'center'
  },
  registerButton: {
    width: '100%',
    height: 70,
    justifyContent: "flex-end",
    backgroundColor: "yellow"
  }
})
