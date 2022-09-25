import { useNavigation } from "@react-navigation/native";
import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import { Navigator } from "./utils";

export default function Terms() {
  const navigator = useNavigation<Navigator>();

  return (
    <View
      style={{
        padding: 20,
        height: "100%",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          O BTG tem o compromisso de oferecer sempre o melhor serviço a você,
          pois acreditamos no poder de escolha do usuário. Quando falamos em
          proteção de dados pessoais, isso envolve não apenas o compromisso com
          a proteção de seus dados e respeito à sua privacidade, mas também
          nosso compromisso com você para que você supervisione seus dados.
          Coletamos suas informações pessoais principalmente para fornecer os
          serviços que você contratou, como banco e serviços de seguros. Para
          fazer isso, coletamos informações pessoais que você compartilha
          conosco registrar-se em nossas plataformas, fazer transações
          financeiras e entrar em contato ou interagir conosco através de nossos
          canais de contato ou produtos. Estes são apenas alguns exemplos de
          como nossas atividades usam dados pessoais de maneira legítima e
          dentro de suas expectativas. Levamos a proteção de dados a sério e
          esta política descreve como os dados são coletados, usados,
          compartilhados e armazenados. Se depois de ler esta política você
          ainda tiver alguma dúvida, sinta-se livre para entrar em contato
          conosco.
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 14,
          }}
        >
          Ao continuar você concorda com as taxas previstas pelo nosso algoritmo
          para que possamos te proporcionar a melhor experiência.
        </Text>
      </View>

      <Button
        mb={10}
        cta="Voltar para o início"
        bg="#051429"
        onPress={() => navigator.navigate("#BTGFazTech - OpenLimite", {})}
      />
    </View>
  );
}
