import React from "react";

import { View, Text, TouchableOpacity, Platform } from "react-native";
import Header from "../components/Header";

export default function Details() {
  return (
    <View
      style={{
        backgroundColor: "#051429",
        paddingTop: Platform.OS === "ios" ? 30 : 10,
      }}
    >
      <Header />
      <View
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#333",
          }}
        >
          Hello World!, details
        </Text>
      </View>
    </View>
  );
}
