import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function TextInputField(props) {
  return (
    <View style={styles.wrapper}>
      <TextInput
      style={{borderColor: props.error? 'red' : 'black'}}
      {...props}
      />
      {props.errorText && (
        <Text style={styles.errorText}>{props.errorText}HELLo</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  redBorder:{
    borderColor: 'red'
  },
  errorText: {
    color: 'red'
  },
  wrapper: {
    paddingBottom: 20
  }
});

