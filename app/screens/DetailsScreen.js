import React, {useEffect, useState} from 'react'
import { connect } from "react-redux";
import { TouchableOpacity, Button, Text, StyleSheet, View, Image, FlatList, Pressable } from 'react-native'

import { getCategory, deleteExpense } from '../store/categoriesReducer';

import AddForm from '../components/AddForm'


export function DetailsScreen(props) {
  const {itemId} = props.route.params
  const [modalVisible, setModalVisible] = useState(false)
  
  useEffect(() => {
      props.getCategory(itemId)
      console.log("called use efect details screen", props.category)
  }, [])

  const renderItem = ({item}) => (

      <Pressable
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
        ><Button title="delete"
        onPress={() => props.deleteExpense(item.id)}
        /></View>
      
        {/* Expense Description */}
        <View style={{ paddingHorizontal: 24 }}>
          {/* Title and description */}
          <Text style={{ fontSize: 22 }}>{item.title}</Text>
          <Text style={{ fontSize: 16, flexWrap: "wrap", color: "gray" }}>
            {item.description}
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
            backgroundColor: props.category.color,
          }}
        >
          <Text>${item.total}</Text>
        </View>
      </Pressable>
  )
  if (props.category.expenses){
    return (
      <View
      key={props.category.expenses.categoryId}
        style={{
          alignItems: "center",
          top: 50,
          margin: 20,
          height: "90%"
        }}
      >
        <View style={{flexDirection: "row"}}>
        <Text style={{fontSize: 30}}>{props.category.name} Summary</Text>
        <Button title="+"
        onPress={() => setModalVisible(!modalVisible)}
        />
        <AddForm setModalVisible={setModalVisible} modalVisible={modalVisible} itemId={itemId}/>
        </View>
        
        <FlatList
                data={props.category.expenses}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
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
    deleteExpense: (id) => dispatch(deleteExpense(id))
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


