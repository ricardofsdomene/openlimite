import React, { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Header from "../components/Header";

import MasterCardLogo from "../assets/master.png";
import VisaLogo from "../assets/visa.png";

export default function Transaction() {
  const username = "Thomaz Thurtz Mendes";
  const balance = "18.041,50";

  const [hidden, setHidden] = useState<boolean>(true);

  function Cards() {
    function Card({
      name = username,
      brand = "mastercard",
      cvv = "555",
      number = "5555 5555 5555 5557",
      exp = "12/26",
    }) {
      return (
        <View
          style={{
            borderRadius: 10,
            padding: 20,
            backgroundColor: "#f0f0f0",
            shadowColor: "#171717",
            shadowOffset: { width: 1, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            width: "100%",
          }}
        >
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
                fontSize: 18,
                fontWeight: "300",
              }}
            >
              {username}
            </Text>
            <Text
              style={{
                color: "#333",
                fontSize: 20,
              }}
            >
              {brand === "mastercard" ? (
                <Image
                  source={MasterCardLogo}
                  style={{
                    width: 40,
                  }}
                />
              ) : (
                <Image
                  source={VisaLogo}
                  style={{
                    width: 50,
                  }}
                />
              )}
            </Text>
          </View>
          <View
            style={{
              marginVertical: 20,
              height: 1,
              width: "100%",
            }}
          />
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
                  fontSize: 14,
                }}
              >
                Número
              </Text>
              <Text
                style={{
                  color: "#333",
                  fontSize: 18,
                }}
              >
                {hidden ? number : `---- ---- ---- ${number.slice(-4)}`}
              </Text>
            </View>
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  color: "#333",
                  fontSize: 14,
                }}
              >
                CVV
              </Text>
              <Text
                style={{
                  color: "#333",
                  fontSize: 18,
                }}
              >
                {hidden ? cvv : "---"}
              </Text>
            </View>
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  color: "#333",
                  fontSize: 14,
                }}
              >
                Venc.
              </Text>
              <Text
                style={{
                  color: "#333",
                  fontSize: 18,
                }}
              >
                {hidden ? exp : "---"}
              </Text>
            </View>
          </View>
        </View>
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
          Seus cartões
        </Text>
        <Card
          brand="visa"
          cvv="555"
          exp="12/22"
          name={username}
          number="5555 5555 5555 5557"
        />
      </View>
    );
  }

  function Transactions() {
    function Transaction({ amount = 0, provider = "", denied = false }) {
      return (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 10,
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: denied && hidden ? "#FC642D" : "#e0e0e0",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 14,
                color: denied && hidden ? "#FC642D" : "#333",
              }}
            >
              {hidden ? provider : "---------------"}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 12,
                color: denied && hidden ? "#FC642D" : "#333",
              }}
            >
              {hidden ? "Cartão *5557" : "---------------"}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                color: denied && hidden ? "#FC642D" : "#333",
              }}
            >
              {hidden
                ? amount.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })
                : "--------"}
            </Text>
            {denied && hidden && (
              <AntDesign
                style={{
                  marginLeft: 7.5,
                }}
                name="warning"
                color="#FC642D"
                size={14}
              />
            )}
          </View>
        </View>
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
          Transações
        </Text>
        <Transaction provider="Mercado Livre" amount={780} denied />
        <Transaction provider="Uber" amount={22.08} />
        <Transaction provider="Uber" amount={17.83} />
        <Transaction provider="IFood" amount={45.33} />
        <Transaction provider="Binance" amount={1300} />
        <Transaction provider="Uber" amount={12.63} />
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <Cards />
        <Transactions />
      </ScrollView>
    </>
  );
}
