import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StartScreen } from "../screens/StartScreen/StartScreen";

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}