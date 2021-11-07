import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ImageBackground,
} from "react-native";

import repeatedSquares from "../assets/double-bubble-outline.png";

export default function UserInfo() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={repeatedSquares}
        resizeMode="cover"
        style={styles.image}
      >
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
          ></View>

          <View style={{ marginLeft: 24 }}>
            <Text style={styles.text}>11 Nov, 2021</Text>
            <Text style={{ color: "gray" }}>18% more than last month</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "white",
  },
  text: {
    color: "#966892",
    fontSize: 22,
  },
  image: {
    height: 100,
    width: "100%",
  },
});
