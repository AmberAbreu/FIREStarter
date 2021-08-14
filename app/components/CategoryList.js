// import React, {useRef} from 'react'
// import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Image, Animated , FlatList} from 'react-native'
// import categoriesData from '../dummydata'

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'




// export default function CategoryList() {
//   const [categories, setCategories] = React.useState(categoriesData)

  
//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//         style={{
//             flex: 1,
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             margin: 5,
//             paddingVertical: 50,
//             paddingHorizontal: 24,
//             borderRadius: 5,
//             backgroundColor: "white",
//             ...styles.shadow
//         }}
//     >

//         <Image
//             source={item.icon}
//             style={{
//                 width: 20,
//                 height: 20,
//                 tintColor: item.color
//             }}
//         />
//         <Text style={{ marginLeft: 8, color: "blue", fontSize: 14 }}>{item.name}</Text>
        
//     </TouchableOpacity>
// )

// return (
//     <SafeAreaView style={{ paddingHorizontal: 24 - 5 }}>
//         <Animated.View style={{ height: '80%' }}>
//             <FlatList
//                 data={categories}
//                 renderItem={renderItem}
//                 keyExtractor={item => `${item.id}`}
//                 numColumns={2}
//             />
//         </Animated.View>
        
        
//     </SafeAreaView>
// )
// }

// const styles = StyleSheet.create({
//   shadow: {
//     shadowColor: "#000",
//     shadowOffset: {
//         width: 2,
//         height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 3,
// }
// })
