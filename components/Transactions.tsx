import React from "react";

import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { CardTransaction } from "../models/card/transaction";
import { Transaction } from "./Transaction";

type TransactionsType = {
  transactions: CardTransaction[];
};

export function Transactions(value: TransactionsType) {
  return (
    <View
      style={{
        height: Dimensions.get("window").height - 300,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        style={{
          marginTop: 20,
        }}
        data={value.transactions}
        renderItem={(data) => (
          <Transaction
            id={data.item.transactionId}
            amount={data.item.amount}
            provider={data.item.transactionName}
            type={data.item.creditDebitType}
          />
        )}
        keyExtractor={(item) => item.transactionId}
      />
    </View>
  );
}
