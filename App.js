import 'react-native-gesture-handler';
import React from "react";
import { View, Container, AppRegistry } from "react-native/";
import { NavigationContainer } from '@react-navigation/native';
import { MenuDrawer } from "./src/navigation/drawer";

export default function App() {
  return (
    <NavigationContainer>
      <MenuDrawer />
    </NavigationContainer>
  )
}

AppRegistry.registerComponent('AppFinanca', () => App)
