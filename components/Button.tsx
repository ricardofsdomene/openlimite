import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from "react-native";

type ButtonProps = {
  bg?: string;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  cta?: string;
  onPress(): void;
};

export default function Button(value: ButtonProps) {
  return (
    <Pressable
      onPress={() => value.onPress()}
      style={{
        marginTop: value.mt ? value.mt : 0,
        marginBottom: value.mb ? value.mb : 0,
        marginLeft: value.ml ? value.ml : 0,
        marginRight: value.mr ? value.mr : 0,
        borderRadius: 5,
        height: 45,
        width: Dimensions.get("window").width - 40,
        backgroundColor: value.bg ? value.bg : "#02C567",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          color: "#FFF",
          fontSize: 16,
        }}
      >
        {value.cta}
      </Text>
    </Pressable>
  );
}
