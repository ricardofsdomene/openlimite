import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useState } from "react";
import Slider from "@react-native-community/slider";

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
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default function LimitScreen({}) {
  const navigation = useNavigation<Navigator>();

  const [hidden, setHidden] = useState<boolean>(true);
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);

  type OpenLimiteResponse = {
    success?: boolean;
    error?: boolean;
    data: {
      current?: number;
      amount?: number;
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

  const [selectedLimit, setSelectedLimit] = useState<number>(0);
  const [confirmedLimit, setConfirmedLimit] = useState<boolean>(false);

  async function handleOpenLimite(value: OpenLimiteResponse) {
    setStep(1);
    setTimeout(() => {
      setOpenLimiteResponse(value);
      setStep(2);
    }, 2500);
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
                  current: 5000,
                  amount: 15000,
                  message: "Limite pré-aprovado",
                },
              })
            }
            bg="#151A49"
            cta="Ativar OpenLimite"
            mt={20}
          />
          {/* <Button
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
          /> */}
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
          paddingBottom: Platform.OS === "ios" ? 30 : 20,
          height: "100%",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "90%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="closecircle" color="#ff0000" size={70} />
          <Text
            style={{
              marginTop: 20,
              color: "#333",
              fontSize: 18,
            }}
          >
            Dados Insuficientes
          </Text>
          <Text
            style={{
              textAlign: "center",
              marginTop: 5,
              color: "#333",
              fontSize: 16,
            }}
          >
            Você pode tentar novamente em alguns dias
          </Text>
        </View>
        <Button
          mt={20}
          bg="#151A49"
          cta="Voltar para o início"
          onPress={() => navigation.navigate("#BTGFazTech - OpenLimite", {})}
        />
      </View>
    );
  }

  function Confirmed() {
    return (
      <View
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#333",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Confirmed
        </Text>
        <Text
          style={{
            color: "#333",
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          {selectedLimit}
        </Text>
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
    confirmedLimit ? (
      <View
        style={{
          padding: 20,
          paddingBottom: Platform.OS === "ios" ? 30 : 20,
          height: "100%",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "90%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="checkcircle" color="#02C567" size={70} />
          <Text
            style={{
              marginTop: 20,
              color: "#333",
              fontSize: 18,
            }}
          >
            Seu novo limite é de
          </Text>
          <Text
            style={{
              color: "#333",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            {selectedLimit > 0
              ? selectedLimit.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })
              : openLimiteResponse.data.amount &&
                openLimiteResponse.data.amount.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
          </Text>
        </View>
        <Button
          mt={20}
          cta="Voltar para o início"
          onPress={() => navigation.navigate("#BTGFazTech - OpenLimite", {})}
        />
      </View>
    ) : (
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
              fontSize: 18,
              color: "#333",
            }}
          >
            Parabéns!
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              marginTop: 5,
              fontSize: 22,
              color: "#333",
            }}
          >
            OpenLimite constatou que você está apto a aumentar seu limite!
          </Text>
          <View>
            <Text
              style={{
                marginTop: 40,
                fontSize: 18,
                color: "#333",
              }}
            >
              Você sofreu um reajuste de crédito graças aos seus dados do
              OpenLimite
            </Text>
            <Text
              style={{
                marginTop: 40,
                fontSize: 16,
                color: "#333",
              }}
            >
              Seu novo limite máximo é de
            </Text>
            <View
              style={{
                marginTop: 10,
                backgroundColor: "#f0f0f0",
                shadowColor: "#171717",
                shadowOffset: { width: 1, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                borderRadius: 10,
                padding: 20,
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontSize: 33,
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                {openLimiteResponse.data.amount &&
                  openLimiteResponse.data.amount.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
              </Text>
            </View>

            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 16,
                  color: "#333",
                }}
              >
                Limite atual será de:
              </Text>
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                {selectedLimit
                  ? selectedLimit.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })
                  : openLimiteResponse.data.amount}
              </Text>
            </View>

            <Slider
              onValueChange={(value) => {
                setSelectedLimit(value);
              }}
              style={{ width: "100%", height: 40 }}
              minimumValue={openLimiteResponse.data.current}
              maximumValue={openLimiteResponse.data.amount}
              value={
                selectedLimit ? selectedLimit : openLimiteResponse.data.amount
              }
              minimumTrackTintColor="#151A49"
              maximumTrackTintColor="#FC642D"
            />
          </View>
        </View>
        <Button
          bg="#151A49"
          mb={10}
          cta="Definir limite"
          onPress={() => {
            setStep(1);
            setTimeout(() => {
              setConfirmedLimit(true);
              setStep(2);
            }, 1250);
          }}
        />
      </View>
    )
  ) : null;
}
