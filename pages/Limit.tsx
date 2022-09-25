import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Pressable,
  Platform,
  ActivityIndicator,
} from "react-native";
import Button from "../components/Button";
import { Navigator } from "./utils";

export default function Limit({}) {
  const navigation = useNavigation<Navigator>();

  const [hidden, setHidden] = useState<boolean>(true);
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);

  type OpenLimiteResponse = {
    success?: boolean;
    error?: boolean;
    data: {
      message: string;
    };
  };

  const [openLimiteResponse, setOpenLimiteResponse] =
    useState<OpenLimiteResponse>({
      error: true,
      data: {
        message: "",
      },
    });

  async function handleOpenLimite(value: OpenLimiteResponse) {
    setStep(1);
    setTimeout(() => {
      setOpenLimiteResponse(value);
      setStep(2);
    }, 5000);
  }

  function Limit({
    status = "Em aberto",
    exp = "05/10",
    limit = 5000,
    spent = 1958.5,
    available = 3041.5,
  }) {
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
          height: 110,
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
                ? available.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })
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
                width: "33%",
              }}
            />
          )}
        </View>
      </Pressable>
    );
  }

  function Activate() {
    function HeadLine() {
      return (
        <View
          style={{
            paddingVertical: 20,
            width: "100%",
            justifyContent: "space-between",
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              color: "#333",
              fontWeight: "bold",
            }}
          >
            OpenLimite
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              color: "#333",
            }}
          >
            Agora você pode se conectar com sua conta de outra instituição para
            tentar liberar mais crédito aqui no BTG
          </Text>
          <Button
            onPress={() =>
              handleOpenLimite({
                success: true,
                data: {
                  message: "Limite pré-aprovado",
                },
              })
            }
            bg="#151A49"
            cta="Ativar OpenLimite"
            mt={20}
          />
          <Button
            onPress={() =>
              handleOpenLimite({
                error: true,
                data: {
                  message: "Ops",
                },
              })
            }
            bg="#ff0000"
            cta="Ativar OpenLimite"
            mt={10}
          />
        </View>
      );
    }

    return (
      <View
        style={{
          padding: 20,
          height: "100%",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Limit />
        <HeadLine />
      </View>
    );
  }

  function Processing() {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          height: "100%",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            width: "100%",
            textAlign: "left",
            color: "#151A49",
            fontSize: 26,
            fontWeight: "bold",
          }}
        >
          Aguarde
        </Text>
        <View
          style={{
            marginTop: 5,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={{
              marginRight: 10,
              textAlign: "left",
              color: "#151A49",
              fontSize: 16,
            }}
          >
            OpenLimite esta processando seus dados
          </Text>
          <ActivityIndicator size="small" color="#151A49" />
        </View>
      </View>
    );
  }

  function Denied() {
    return (
      <View
        style={{
          padding: 20,
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 22,
              color: "#333",
              fontWeight: "bold",
            }}
          >
            Dados Insuficientes
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontSize: 18,
              color: "#333",
              width: "70%",
            }}
          >
            Você poderá tentar novamente em alguns dias
          </Text>
        </View>
        <Button
          bg="#151A49"
          mb={10}
          cta="Voltar ao menu inicial"
          onPress={() => {}}
        />
      </View>
    );
  }

  function Approved() {
    return (
      <View
        style={{
          padding: 20,
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 22,
              color: "#333",
              fontWeight: "bold",
            }}
          >
            Pré Aprovado!!
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontSize: 18,
              color: "#333",
              width: "70%",
            }}
          >
            O algoritmo do OpenLimite concluiu que você está apto a aumentar seu
            limite
          </Text>
        </View>
        <Button
          bg="#151A49"
          mb={10}
          cta="Voltar ao menu inicial"
          onPress={() => {}}
        />
      </View>
    );
  }

  return step === 0 ? (
    <Activate />
  ) : step === 1 ? (
    <Processing />
  ) : openLimiteResponse.error ? (
    <Denied />
  ) : openLimiteResponse.success ? (
    <Approved />
  ) : null;
}
