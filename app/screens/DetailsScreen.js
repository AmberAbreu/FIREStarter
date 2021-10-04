import React, {useEffect, useState} from 'react'
import { connect } from "react-redux";
import { TouchableOpacity, Button, Text, StyleSheet, View, Image } from 'react-native'

import { getCategory } from '../store/categoriesReducer';


export function DetailsScreen(props) {
  const {itemId} = props.route.params
  let [category, setCategory] = useState([])
  
  useEffect(() => {
      props.getCategory(itemId)
      setCategory(props.category)
      console.log("called use efect details screen", props.category)
  }, [category])

  if (category.expenses){
    return (
      <View
      
        style={{
          alignItems: "center",
          top: 50,
          margin: 20,
        }}
      >
        <Text style={{fontSize: 30}}>{props.category.name} Summary</Text>
        { category.expenses.map((expense) => (

<View
  key={props.category.expenses.categoryId}
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
      backgroundColor: category.color,
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
  }else return <Text>None yet</Text>
  
}

const mapState = (state) => {
  return {
    category: state.categoriesReducer,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getCategory: (id) => dispatch(getCategory(id)),
  };
};

export default connect(mapState, mapDispatch)(DetailsScreen);

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


