import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  Pressable,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();

  const fetchPost = async () => {
    try {
      const response = await axios.post(
        "https://vercel-9nlvq4v5v-rawanhabuhajer.vercel.app/api/user/signup",
        {
          username,
          email,
          password,
        }
      );
      if (response.status === 200) {
        const userData = response.data;
        setUserData(userData);

        await AsyncStorage.setItem("user", JSON.stringify(userData));

        navigation.navigate("Login");
      } else {
        setError("Unexpected response status: " + response.status);
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

  const onSignUpPress = async () => {
    try {
      await fetchPost();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Main content */}
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <View
          style={{
            marginBottom: 30,
            marginTop: 40,
          
            alignItems:"center"
          }}
        >
          <Image
            style={{ width: 40, height: 50 }}
            source={require("../assets/icon/logo.png")}
          />
          <Image
            style={{ width: 60, height: 13, marginTop: 15 }}
            source={require("../assets/icon/Saed.png")}
          />
        </View>

   
        <KeyboardAvoidingView>
          <View style={{}}>
            <Text
              style={{
                fontSize: 24,
                color: "#041E42",
                fontWeight:500,
                marginLeft: 15 
              }}
            >
              Sign up
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: 10,
                color: "#041E42",
                marginLeft: 15 
              }}
            >
              Start your journey with the best service
            </Text>
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
                placeholder={"Enter your name"}
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
                placeholder={"Enter your email"}
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
                placeholder={"Enter your Password"}
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
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                style={{
                  marginVertical: 10,
                  width: 290,
                  fontSize: 14,
                  paddingLeft: 5,
                }}
                placeholder={"Confirm your Password"}
              />
            </View>
          </View>
          {error && (
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 50,
                backgroundColor: "#FAEDED",
                marginTop: 15,
                borderWidth: 1,
                borderColor: "#DC0F00",
                borderRadius: 5,
              }}
            >
              <Text>{error}</Text>
            </View>
          )}

          <View
            style={{
              marginTop: 25,
            }}
          >
            <TouchableOpacity
              onPress={() => onSignUpPress()}
              style={{
                paddingVertical: 13,
                paddingHorizontal: 20,
                borderRadius: 5,
                backgroundColor: "#6FEEFF",
                width: 250,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Text
                style={{
                  color: "#353535",
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>

          {/* Link to Sign In */}
          <Pressable
            onPress={() => navigation.navigate("Login")}
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 14 }}>
              Already have an account ? 
            </Text>
            <Text
              style={{ textAlign: "center", color: "#2DBCCF", fontSize: 14 , marginLeft:4}}
            >
               Login here!
            </Text>
          </Pressable>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default Register;
