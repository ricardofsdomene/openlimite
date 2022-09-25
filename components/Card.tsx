import { Text, Image, Pressable, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import { Navigator } from "../pages/utils";

import MasterCardLogo from "../assets/master.png";
import VisaLogo from "../assets/visa.png";

export function Card({
  name = "",
  brand = "",
  cvv = "",
  number = "",
  exp = "",
  hidden = false,
}) {
  const navigation = useNavigation<Navigator>();

  const { user } = useContext(ContextProvider);

  const username = user.name;

  return (
    <Pressable
      onPress={() => navigation.navigate("Cartão", {})}
      style={{
        height: 140,
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
          {username.toLocaleUpperCase()}
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
    </Pressable>
  );
}
