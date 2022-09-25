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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "#051429",
        }}
      >
        <Text style={{ fontWeight: "bold", color: "#051429" }}>#BTG</Text>
        FazTech
      </Text>
    </View>
  );
}
