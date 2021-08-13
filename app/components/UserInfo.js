import React from "react";
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

export default function UserInfo() {
  return (
    <View
      style={{
        paddingHorizontal: 24,
        paddingVertical: 24,
        backgroundColor: "white",
      }}
    >
      <View>
        <Text style={{ color: "blue", fontSize:22 }}>My Expenses</Text>
        <Text style={{fontSize:16, color: "gray"}}>
          Summary (private)
        </Text>
      </View>
 
      <View
        style={{
          flexDirection: "row",
          marginTop: 24,
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "gray",
            height: 50,
            width: 50,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        </View>

        <View style={{ marginLeft: 24 }}>
          <Text style={{ color: "blue", fontSize:16 }}>
            11 Nov, 2020
          </Text>
          <Text style={{color: "gray" }}>
            18% more than last month
          </Text>
        </View>
      </View>
    </View>
  );
}
