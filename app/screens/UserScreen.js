import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

import UserInfo from "../components/UserInfo";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "User Info",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Finances",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Logout",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const UserScreen = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <SafeAreaView style={styles.container}>
      <UserInfo />
      <View
        style={{
          backgroundColor: "gray",
          height: 100,
          width: 100,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: "#966892",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
