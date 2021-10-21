import React from 'react'
import { View, Text, TextInput } from 'react-native'

export default function TextInputField() {
  return (
    <View>
      <TextInput
      placeholder="title"
    />
    <TextInput
      placeholder="description"
    />
    <TextInput
      placeholder="total cost"
    />
    </View>
  )
}
