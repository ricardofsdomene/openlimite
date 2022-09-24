import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";

export default function Header({ goBack = false }) {
  return (
    <View
      style={{
        height: 100,
        width: Dimensions.get("window").width,
        paddingTop: Platform.OS === "ios" ? 30 : 10,
        backgroundColor: "#051429",
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "#FFF",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>#BTG</Text>FazTech
      </Text>
    </View>
  );
}
