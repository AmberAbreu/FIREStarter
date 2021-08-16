import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'


const chart = require('../assets/icons/chart_icon.png')
const plus = require('../assets/icons/plus.png')


export default function CategoryList() {
  
  const [viewMode, setViewMode] = React.useState("chart")
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 24,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <View>
        <Text style={{ color: "blue", fontSize: 16 }}>CATEGORIES</Text>
      </View>

      {/* Button */}
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: viewMode == "chart" ? "pink" : null,
            height: 50,
            width: 50,
            borderRadius: 25,
          }}
          onPress={() => setViewMode("chart")}
        >
          <Image
            source={chart}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: viewMode == "chart" ? "white" : "gray",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: viewMode == "list" ? "pink" : null,
            height: 50,
            width: 50,
            borderRadius: 25,
            marginLeft: 8,
          }}
          onPress={() => setViewMode("list")}
        >
          <Image
            source={plus}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: viewMode == "list" ? "white" : "gray",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

