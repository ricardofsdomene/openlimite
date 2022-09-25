import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Transaction from "./pages/Transaction";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="#BTGFazTech - OpenLimite" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Group
          screenOptions={{
            presentation: "modal",
          }}
        >
          <Stack.Screen name="Transaction" component={Transaction} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
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
