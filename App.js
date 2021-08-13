import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button , Platform} from 'react-native';
import HomeScreen from './app/screens/HomeScreen'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'


export default function App() {

  return (
    <HomeScreen/>
  );
}

const styles = StyleSheet.create({
  baseText: {
    color: 'red',
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});


// import 'react-native-gesture-handler';
// import React, { useEffect, useState } from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import { LoginScreen, RegistrationScreen } from './src/screens'
// import HomeScreen from './app/screens/HomeScreen'
// import {decode, encode} from 'base-64'
// if (!global.btoa) {  global.btoa = encode }
// if (!global.atob) { global.atob = decode }

// const Stack = createStackNavigator();

// export default function App() {

//   const [loading, setLoading] = useState(true)
//   const [user, setUser] = useState(null)

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         { user ? (
//           <Stack.Screen name="Home">
//             {props => <HomeScreen {...props} extraData={user} />}
//           </Stack.Screen>
//         ) : (
//           <>
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Registration" component={RegistrationScreen} />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }