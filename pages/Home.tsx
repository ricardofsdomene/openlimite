import React, { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Header from "../components/Header";

import MasterCardLogo from "../assets/master.png";
import VisaLogo from "../assets/visa.png";

export default function Home() {
  const username = "Thomaz Thurtz Mendes";
  const balance = "18.041,50";

  const [hidden, setHidden] = useState<boolean>(false);

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
            color: "#333",
            fontSize: 26,
          }}
        >
          Olá, {username.split(" ")[0]}
        </Text>
        <View>
          <Text
            style={{
              marginTop: 20,
              color: "#333",
              fontSize: 16,
            }}
          >
            Sua fatura atual
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
              {hidden ? `R$${balance}` : "-------"}
            </Text>
            <Entypo
              onPress={() => setHidden(!hidden)}
              name={hidden ? "eye-with-line" : "eye"}
              size={26}
              color="black"
            />
          </View>
        </View>
      </View>
    );
  }

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
            backgroundColor: "#DDD",
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
                fontSize: 20,
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
              backgroundColor: "#bbb",
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
            fontSize: 20,
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

  function Limits() {
    function Limit({
      status = "Em aberto",
      exp = "05/10",
      limit = 5000,
      spent = 1958.5,
      available = 3041.5,
    }) {
      return (
        <View
          style={{
            borderRadius: 10,
            padding: 20,
            backgroundColor: "#DDD",
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
                {status}
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
                {exp}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#ff0000",
                }}
              >
                Disponível
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "#ff0000",
                }}
              >
                {available.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Text>
            </View>
          </View>
          <View
            style={{
              borderRadius: 20,
              marginTop: 20,
              height: 10,
              width: "100%",
              backgroundColor: "#FF0000",
            }}
          >
            <View
              style={{
                borderRadius: 50,
                backgroundColor: "#333",
                height: 10,
                width: "33%",
              }}
            />
          </View>
          <Text
            style={{
              marginTop: 20,
              color: "#333",
              fontSize: 20,
              fontWeight: "bold",
              textDecorationLine: "underline",
            }}
          >
            Aumentar meu limite
          </Text>
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
            fontSize: 20,
            color: "#333",
            marginBottom: 10,
          }}
        >
          Limite atual
        </Text>
        <Limit />
      </View>
    );
  }

  return (
    <>
      <Header />
      <ScrollView>
        <Greeting />
        <Cards />
        <Limits />
      </ScrollView>
    </>
  );
}
