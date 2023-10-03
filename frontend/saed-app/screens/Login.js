import React, { useState, useContext } from "react";
import {
  Text,
  View,
  Pressable,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const fetchPost = async () => {
    try {
      const response = await axios.post(
        "https://vercel-9nlvq4v5v-rawanhabuhajer.vercel.app/api/user/signin",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        const userData = response.data;
        setUserData(userData);

        await AsyncStorage.setItem("user", JSON.stringify(userData));
        const user = response.data;
        setUser(user);
        navigation.navigate("Main");
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

  const onSignInPress = async () => {
    try {
      await fetchPost();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Set status bar style */}
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

      {/* Main content */}
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <View
          style={{
            marginBottom: 20,
            marginTop: 40,
            alignItems: "center",
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
                fontWeight: 500,
                marginLeft: 15,
              }}
            >
              Login
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: 10,
                color: "#041E42",
                marginLeft: 15,
                marginBottom: 20,
              }}
            >
              Hello there! We're delighted to see you again.
            </Text>
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
              width: "92%",
              alignSelf: "center",
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
              width: "92%",
              alignSelf: "center",
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
              marginTop: 45,
            }}
          >
            <TouchableOpacity
              onPress={() => onSignInPress()}
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
                sign in
              </Text>
            </TouchableOpacity>
          </View>

          {/* Link to Sign In */}
          <Pressable
            onPress={() => navigation.navigate("Login")}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                marginTop: 25,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ textAlign: "center", color: "gray", fontSize: 14 }}
              >
                If you don’t have an account register
              </Text>
              <Pressable
                onPress={() => navigation.navigate("Register")}
                style={{
                  marginTop: 5,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ textAlign: "center", color: "gray", fontSize: 14 }}
                >
                  You can
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#2DBCCF",
                    fontSize: 14,
                  }}
                >
                  Register here !
                </Text>
              </Pressable>
            </View>
          </Pressable>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default Login;
