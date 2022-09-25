import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";

import { View, Text, TouchableOpacity, Pressable, Image } from "react-native";
import { Card } from "../components/Card";
import { Transactions } from "../components/Transactions";
import { ContextProvider } from "../context/ContextProvider";
import { Navigator } from "./utils";

export default function CardScreen() {
  const { cardTransactions, cardLimit, cardBills, cards, user } =
    useContext(ContextProvider);

  const navigation = useNavigation<Navigator>();

  return (
    <View
      style={{
        padding: 20,
        width: "100%",
        height: "100%",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          height: 140,
        }}
      >
        <Card
          cvv={cards[0].creditCardInfo?.cvv}
          exp={`${
            cards[0].creditCardInfo?.exp_month
          }/${cards[0].creditCardInfo?.exp_year.slice(-2)}`}
          hidden
          name={cards[0].creditCardInfo?.holder_name}
          number={cards[0].creditCardInfo?.number}
        />
      </View>
      <Transactions transactions={cardTransactions} />
    </View>
  );
}
