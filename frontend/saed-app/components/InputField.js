import React from "react";
import {
  View,
  TextInput,

} from "react-native";
import { Entypo } from "@expo/vector-icons";
const InputField = ({
  value,
  onChangeText,
  placeholder,
  user,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        backgroundColor: "#F4FEFF",
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 20,
      }}
    >
      <Entypo name={user} size={20} color="#CBC7C7" style={{
        marginLeft:15
      }}/>
     

      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{
          marginVertical: 10,
          width: 290,
          fontSize: 14,
          paddingLeft: 5,
        }}
        placeholder={placeholder}
      />
    </View>
  );
};

export default InputField;
