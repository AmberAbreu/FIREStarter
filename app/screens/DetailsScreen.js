import React, {useEffect, useState} from 'react'
import { connect } from "react-redux";
import { TouchableOpacity, Button, Text, StyleSheet, View, Image, FlatList, Pressable } from 'react-native'

import { getCategory, deleteExpense } from '../store/categoriesReducer';
import Spinner from '../components/Spinner'
import {AntDesign} from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AddForm from '../components/AddForm'
import EditForm from '../components/EditForm'


export function DetailsScreen(props) {
  const {itemId} = props.route.params
  const [modalVisible, setModalVisible] = useState(false)
  const [editModalVisible, setEditModalVisible] = useState(false)

const [inputs, setInputs] = useState({
    title: "",
    description: "",
    total: 0
  })
  useEffect(() => {
      props.getCategory(itemId)
  }, [itemId])

  function handleEdit(item){
    setInputs({
      id: item.id,
      title: item.title,
      description: item.description,
      total: item.total.toString()
    })
    setEditModalVisible(!editModalVisible)
  }

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

        
        
        {/* Expense Description */}
        <View style={styles.header}>
          {/* Title and description */}
          <Text style={{ fontSize: 22 }}>{item.title}</Text>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons name="delete-forever" size={24} color="black"
                  onPress={() => props.deleteExpense(item.id)}
                />
                <AntDesign 
                name="edit" size={24} color="black" 
                onPress={() => handleEdit(item)}
                />
                <EditForm setModalVisible={setEditModalVisible} modalVisible={editModalVisible} inputs={inputs} setInputs={setInputs}/>
            </View>
        </View>
      </View>
      {/* <Text style={{ fontSize: 16, flexWrap: "wrap", color: "gray" }}>
            {item.description}
          </Text> */}
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
        <AddForm setModalVisible={setModalVisible} modalVisible={modalVisible} itemId={itemId} />
        </View>
        
        <FlatList
                data={props.category.expenses}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
            />

      </View> 
    ); 
  }else return <Spinner/>
  
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
  },
  header: { 
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
     padding: 24,
    }
})


