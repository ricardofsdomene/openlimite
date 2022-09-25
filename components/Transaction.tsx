import { useNavigation } from "@react-navigation/native";
import {
  View,
  TouchableOpacity,
  Text,
  Pressable,
  Dimensions,
  Platform,
} from "react-native";
import { Navigator } from "../pages/utils";

import { AntDesign } from "@expo/vector-icons";

export function Transaction({
  id = "",
  hidden = true,
  amount = 0,
  provider = "",
  denied = false,
  type = "",
}) {
  const navigation = useNavigation<Navigator>();

  return (
    <Pressable
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: denied && hidden ? "#FC642D" : "#e0e0e0",
        width: Dimensions.get("window").width - 40,
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
          {hidden ? type : "-------------"}
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
            ? Platform.OS === "ios"
              ? amount.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })
              : `R$ ${amount.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}`
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
    </Pressable>
  );
}
