import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function DetailsScreen(props) {
  const {itemId} = props.route.params

  return (
   
      <TouchableOpacity style={{alignItems:'center', justifyContent:'center', top: 50}}>
          <Text>This is the details screen.</Text>
      </TouchableOpacity>
  )
}

