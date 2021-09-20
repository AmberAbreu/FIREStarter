import React from 'react'
import { TouchableOpacity, Button, Text, StyleSheet, View, Image } from 'react-native'

import categoriesData from '../dummydata'

export default function DetailsScreen(props) {
  const {itemId} = props.route.params
  const [categories, setCategories] = React.useState(categoriesData)
  const [selectedCategory, setSelectedCategory] = React.useState(null)

  const item = categories.filter(item => item.id === itemId)
  
  return (
    <View
      style={{
        alignItems: "center",
        top: 50,
        margin: 20,
      }}
    >
      <Text style={{fontSize: 30}}>{item[0].name} Summary</Text>
      {item[0].expenses.map((expense) => (

        <View
          style={{
            width: 300,
            borderRadius: 12,
            margin: 10,
            backgroundColor: "white",
            ...styles.shadow,
          }}
        >
          {/* Title */}
          <View
            style={{ flexDirection: "row", padding: 24, alignItems: "center" }}
          ></View>

          {/* Expense Description */}
          <View style={{ paddingHorizontal: 24 }}>
            {/* Title and description */}
            <Text style={{ fontSize: 22 }}>{expense.title}</Text>
            <Text style={{ fontSize: 16, flexWrap: "wrap", color: "gray" }}>
              {expense.description}
            </Text>
          </View>

          {/* Price */}
          <View
            style={{
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderBottomStartRadius: 12,
              borderBottomEndRadius: 12,
              backgroundColor: item.color,
            }}
          >
            <Text>${expense.total}</Text>
          </View>
        </View>
      ))}
      <Button title="+"
      onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
      shadowColor: "#000",
      shadowOffset: {
          width: 2,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 3,
  }
})