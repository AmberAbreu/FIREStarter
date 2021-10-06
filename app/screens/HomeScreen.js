import React, {useEffect} from 'react'
import {useNavigation,useIsFocused} from '@react-navigation/native'
import { connect } from "react-redux";
import food from '../assets/icons/food_icon.png'
import { getCategories } from '../store/categoriesReducer';

import { StyleSheet, Text, View, ImageBackground, SafeAreaView, TouchableOpacity, Image, Animated , FlatList } from 'react-native'

import Details from './DetailsScreen'

import UserInfo from '../components/UserInfo'
import CategoryHeader from '../components/Categories'





function HomeScreen(props) {
  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      props.getCategories()
    });
    
    
  }, [])



  const renderItem = ({ item }) => (
    <TouchableOpacity 
        onPress={() => navigation.navigate('Details', {itemId: item.id})}
        style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 5,
            paddingVertical: 50,
            paddingHorizontal: 24,
            borderRadius: 5,
            backgroundColor: "white",
            ...styles.shadow
        }}
    >

        <Image
            source={{uri: item.icon}}
            style={{
                width: 20,
                height: 20,
                tintColor: item.color
            }}
        />
        <Text style={{ marginLeft: 8, color: "blue", fontSize: 14 }}>{item.name}</Text>
        
    </TouchableOpacity>
)
  return (
    <View>
      <UserInfo/>
      <CategoryHeader/>
      <SafeAreaView style={{ paddingHorizontal: 24 - 5 }}>
        <Animated.View style={{ height: '80%' }}>
            <FlatList
                data={props.categories}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                numColumns={2}
            />
        </Animated.View>
    </SafeAreaView>
    </View>

  )
}

const mapState = (state) => {
  return {
    categories: state.categoriesReducer,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getCategories: () => dispatch(getCategories()),
  };
};

export default connect(mapState, mapDispatch)(HomeScreen);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  card: {
    height: 100,
    width: 100,
    borderStyle: 'solid',
    borderColor: "black",
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContainer: {
    justifyContent:'flex-start'
  },
  loginButton: {
    width: '100%',
    height: 70,
    justifyContent: "flex-end",
    backgroundColor: "orange"
  },
  logo: {
    fontSize: 30,
    
  },
  logoContainer: {
    position:'absolute',
    top: 50,
    justifyContent:'flex-start'
  },
  registerButton: {
    width: '100%',
    height: 70,
    justifyContent: "flex-end",
    backgroundColor: "yellow"
  },
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
