import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import EEIScreen from "./screens/EEIScreen";
import MeteorScreen from "./screens/meteorScreen";
import HomeScreen from "./screens/homeScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="eei" component={EEIScreen} />
        <Stack.Screen name="meteor" component={MeteorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
