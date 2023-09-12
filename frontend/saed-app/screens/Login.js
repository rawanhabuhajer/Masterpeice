import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Pressable,
  Image,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../components/Button";
import InputField from "../components/InputField";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const navigation = useNavigation();

  async function loginUser() {

    const response = await fetch('http://192.168.1.179:8000/api/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);
    if(data.user){
   
      alert("login successfully")
      navigation.navigate('Home')
    }else{
      alert("Please check your username or password")

      }
    }


  return (
    <>
      {/* Set status bar style */}
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

      {/* Main content */}
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            marginBottom: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <Image
            style={{ width: 60, height: 70 }}
            source={require("../assets/icon/logo.png")}
          />
          <Image
            style={{ width: 80, height: 18, marginTop: 15 }}
            source={require("../assets/icon/Saed.png")}
          />
        </View>

        {/* Form for registration */}
        <KeyboardAvoidingView>
          <View style={{ alignItems: "center" }}>
            {/* Title */}
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
                marginTop: 12,
                color: "#041E42",
              }}
            >
              welcome back!
            </Text>
          </View>

          <View style={{ marginTop: 30 }}>
            {/* Input field for name */}

            <InputField
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder={"Enter your Email"}
              user={"email"}
            />

            <InputField
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder={"Enter your Password"}
              user={"lock"}
            />
          </View>
          <View style={{ maxWidth: "80%" }}>
            <Text style={{ color: "red", fontWeight: "bold" }}>
              {errorMessage}
            </Text>
          </View>
          {/* Register button */}

          <View
            style={{
              marginTop: 25,
            }}
          >
            <Button title="Login" colors={["#FF5F6D", "#FFC371"]} onPress={loginUser}/>
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
              <View
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
                  You can{" "}
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
              </View>
            </View>
          </Pressable>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default Login;
