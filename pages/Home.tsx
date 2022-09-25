import React, { useContext, useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Pressable,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Header from "../components/Header";

import MasterCardLogo from "../assets/master.png";
import VisaLogo from "../assets/visa.png";
import { useNavigation } from "@react-navigation/native";
import { Navigator } from "./utils";
import {
  ContextProvider,
  UserContextProvider,
} from "../context/ContextProvider";
import { Transaction } from "../components/Transaction";
import { Card } from "../components/Card";

export default function HomeScreen() {
  const {
    account,
    accountTransactions,
    user,
    balance,
    cardTransactions,
    cardLimit,
    cards,
  } = useContext(ContextProvider);

  const username = user.name;
  const available_balance = balance.availableAmount;

  const navigation = useNavigation<Navigator>();

  const [hidden, setHidden] = useState<boolean>(true);

  function Greeting() {
    return (
      <View
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            marginTop: 10,
            color: "#333",
            fontSize: 26,
            fontWeight: "300",
          }}
        >
          Olá, {username.split(" ")[0]}
        </Text>
        <View>
          <Text
            style={{
              marginTop: 40,
              color: "#333",
              fontSize: 16,
              fontWeight: "300",
            }}
          >
            Seu saldo é
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#333",
                fontSize: 40,
                fontWeight: "bold",
              }}
            >
              {hidden
                ? Platform.OS === "ios"
                  ? `${available_balance.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}`
                  : `R$ ${available_balance.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}`
                : "-------"}
            </Text>
            <Entypo
              onPress={() => setHidden(!hidden)}
              name={hidden ? "eye" : "eye-with-line"}
              size={26}
              color="black"
            />
          </View>
        </View>
      </View>
    );
  }

  function Cards() {
    return (
      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#333",
            marginBottom: 10,
          }}
        >
          Seus cartões
        </Text>
        <Card
          hidden={hidden}
          brand="visa"
          cvv={cards[0].creditCardInfo?.cvv}
          exp={`${cards[0].creditCardInfo?.exp_month}/${cards[0].creditCardInfo?.exp_year}`}
          name={username}
          number={cards[0].creditCardInfo?.number}
        />
      </View>
    );
  }
  function Limits() {
    function Limit({
      status = "Em aberto",
      exp = "05/10",
      limit = cardLimit.limitAmount,
      spent = cardLimit.usedAmount,
      available = cardLimit.availableAmount,
    }) {
      const realLimit = limit - spent;
      const percentageSpent = (spent / limit) * 100;

      return (
        <Pressable
          onPress={() => {
            if (hidden) {
              navigation.navigate("Limite", {});
            }
          }}
          style={{
            backgroundColor: "#f0f0f0",
            shadowColor: "#171717",
            shadowOffset: { width: 1, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            borderRadius: 10,
            padding: 20,
            width: "100%",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  color: "#333",
                }}
              >
                Status
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "#333",
                }}
              >
                {hidden ? status : "--------"}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#333",
                }}
              >
                Venc
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "#333",
                }}
              >
                {hidden ? exp : "----"}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#FC642D",
                }}
              >
                Disponível
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "#FC642D",
                }}
              >
                {hidden
                  ? Platform.OS === "ios"
                    ? realLimit.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })
                    : `R$ ${realLimit.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}`
                  : "------------"}
              </Text>
            </View>
          </View>
          <View
            style={{
              borderRadius: 20,
              marginTop: 20,
              height: 10,
              width: "100%",
              backgroundColor: "#FC642D",
            }}
          >
            {hidden && (
              <View
                style={{
                  borderRadius: 50,
                  backgroundColor: "#151A49",
                  height: 10,
                  width: `${percentageSpent}%`,
                }}
              />
            )}
          </View>
          {hidden && (
            <Text
              style={{
                marginTop: 25,
                color: "#333",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Aumentar meu limite
            </Text>
          )}
        </Pressable>
      );
    }

    return (
      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#333",
            marginBottom: 10,
          }}
        >
          Limite atual
        </Text>
        <Limit
          available={cardLimit.availableAmount}
          spent={cardLimit.usedAmount}
          limit={cardLimit.limitAmount}
        />
      </View>
    );
  }

  function Transactions() {
    return (
      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#333",
            marginBottom: 10,
          }}
        >
          Transações
        </Text>
        {accountTransactions.map((cardTx, i) => {
          if (hidden) {
            return (
              <Transaction
                hidden={hidden}
                key={i}
                provider={cardTx.transactionName}
                type={cardTx.creditDebitType}
                amount={cardTx.amount}
              />
            );
          } else {
            if (i < 3) {
              return (
                <Transaction
                  hidden={hidden}
                  key={i}
                  provider={cardTx.transactionName}
                  type={cardTx.creditDebitType}
                  amount={cardTx.amount}
                />
              );
            }
          }
        })}
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <Greeting />
        <Cards />
        <Limits />
        <Transactions />
      </ScrollView>
    </>
  );
}
