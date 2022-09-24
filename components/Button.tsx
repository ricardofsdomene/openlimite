import React from "react";

import { View, Text, TouchableOpacity, Dimensions } from "react-native";

type ButtonProps = {
  cta?: string;
  onPress(): void;
};

export default function Button(value: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={() => value.onPress()}
      style={{
        borderRadius: 5,
        height: 45,
        width: Dimensions.get("window").width - 40,
        backgroundColor: "#00C389",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          color: "#FFF",
          fontSize: 18,
        }}
      >
        {value.cta}
      </Text>
    </TouchableOpacity>
  );
}
