import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Limit from "./pages/Limit";
import { UserContextProvider } from "./context/ContextProvider";
import Card from "./pages/Card";
import Terms from "./pages/Terms";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="#BTGFazTech - OpenLimite" component={Home} />
          <Stack.Screen name="Detalhes" component={Details} />
          <Stack.Group
            screenOptions={{
              presentation: "modal",
            }}
          >
            <Stack.Screen name="Limite" component={Limit} />
            <Stack.Screen name="Cartão" component={Card} />
            <Stack.Screen name="Termos de Serviço" component={Terms} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
