import React, { useState, useContext } from "react";
import {
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  StatusBar,
  ImageBackground,
  Dimensions,
  Platform,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../components/Button";
import { UserContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";
import axios from "axios";

const EditProfile = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState(null);

  const fetchPatch = async () => {
    try {
      const userId = user._id;
      const response = await axios.patch(
        `https://vercel-9nlvq4v5v-rawanhabuhajer.vercel.app/api/users/updateMe/${userId}`,
        {
          username,
          email,
          password,
        }
      );
      if (response.status === 200) {
        alert("User information updated successfully");
      } else {
        setError("Unexpected response status: " + response.status);
        alert("error");
      }
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.error;
        setError(errorMessage);
      } else if (error.request) {
        setError("Network request failed");
      } else {
        setError("Unexpected error: " + error.message);
      }
    }
  };

  const updateInfo = async () => {
    try {
      await fetchPatch();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <ScrollView
        style={{
          backgroundColor: "#F9FEFF",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 15,
            paddingVertical: 25,
            width: "64%",
            marginTop: 15,
          }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
          <Text style={{ fontWeight: 500 }}>Edit Profile</Text>
        </View>

        <View
          style={{
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
            <Entypo
              name="user"
              size={20}
              color="#CBC7C7"
              style={{
                marginLeft: 15,
              }}
            />

            <TextInput
              value={username}
              onChangeText={(text) => setUsername(text)}
              style={{
                marginVertical: 10,
                width: 290,
                fontSize: 14,
                paddingLeft: 5,
              }}
              placeholder={"Name"}
            />
          </View>
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
            <Entypo
              name="email"
              size={20}
              color="#CBC7C7"
              style={{
                marginLeft: 15,
              }}
            />

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                marginVertical: 10,
                width: 290,
                fontSize: 14,
                paddingLeft: 5,
              }}
              placeholder={"Email"}
            />
          </View>
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
            <Entypo
              name="lock"
              size={20}
              color="#CBC7C7"
              style={{
                marginLeft: 15,
              }}
            />

            <TextInput
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={{
                marginVertical: 10,
                width: 290,
                fontSize: 14,
                paddingLeft: 5,
              }}
              placeholder={"Password"}
            />
          </View>
          <View
            style={{
              marginTop: 45,
            }}
          >
            <Button title={"Save changes"} onPress={updateInfo} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default EditProfile;
