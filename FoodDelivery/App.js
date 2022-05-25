import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import Home from "./components/Home";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Home from "./components/Details";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Details}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   textt:{
//     fontFamily: 'Montserrat-Bold',
//   },

// });
