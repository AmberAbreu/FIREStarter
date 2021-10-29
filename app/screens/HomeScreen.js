import React, {useEffect} from 'react'
import {useNavigation,useIsFocused} from '@react-navigation/native'
import { connect } from "react-redux";
import { getCategories } from '../store/categoriesReducer';

import { StyleSheet, Text, View, ImageBackground, ScrollView, SafeAreaView, TouchableOpacity, Image, Animated , FlatList } from 'react-native'

import { Entypo, AntDesign } from '@expo/vector-icons'; 


import Details from './DetailsScreen'
import UserInfo from '../components/UserInfo'
import Chart from '../components/Chart'
import flower from '../assets/double-bubble-outline.png'


function HomeScreen(props) {
  const navigation = useNavigation()
  const [viewMode, setViewMode] = React.useState("list")

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
        <Text style={{ marginLeft: 8, color: item.color, fontSize: 18 }}>{item.name}</Text>
        
    </TouchableOpacity>
)
  return (
    <ImageBackground source={flower}  resizeMode="cover" style={styles.image}>
      <UserInfo/>
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
        <Text style={{ color: "#966892", fontSize: 20 }}>CATEGORIES</Text>
      </View>

      {/* Button */}
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: viewMode == "chart" ? "#966892" : null,
            height: 50,
            width: 50,
            borderRadius: 25,
          }}
          onPress={() => setViewMode("chart")}
        >
        <AntDesign 
        name="piechart" 
        size={24} 
        color={viewMode == "chart" ? "white" : "gray"} />
         
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: viewMode == "list" ? '#966892' : null,
            height: 50,
            width: 50,
            borderRadius: 25,
            marginLeft: 8,
          }}
          onPress={() => setViewMode("list")}
        >

        <Entypo 
        name="menu" 
        size={24} 
        color={viewMode == "list" ? "white" : "gray"} 
        />
          
        </TouchableOpacity>
      </View>
    </View>
    {/* CHART OR LIST */}

    { viewMode === "list" ?
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
      :
      <View> 
        <Chart/>
      </View>
    }
    </ImageBackground>

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
    justifyContent: 'flex-end',
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
  image: {
    paddingHorizontal: 10,
    paddingVertical: 10,
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
