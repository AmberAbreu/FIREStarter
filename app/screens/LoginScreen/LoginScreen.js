import React from 'react'
import { StyleSheet, TextInput, View, ImageBackground, Text, Button } from 'react-native'

export default function Login() {
  return (
    <ImageBackground source={require('../assets/background.jpeg')}
    style={styles.background}>
      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput 
        style={styles.input}
        placeholder="email"
        />
        <Text>Password</Text>
        <TextInput
        style={styles.input}
        placeholder="useless placeholder"
        keyboardType="text"
      />
      </View>

      <View style={styles.button}>
        <Button
        title="FIRE ME UP"
        color="red"
        accessibilityLabel="continue button"
        ></Button>
      </View>
      
      
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    alignItems:'flex-start',
  },
  input:{
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})
