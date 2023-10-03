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
  TouchableOpacity
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import Button from "../components/Button";
import { UserContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";

const UserProfile = () => {
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);
  const handleLogout = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Login" }],
      })
    );
  };
  return (
    <ScrollView
      style={{
        backgroundColor: "#F9FEFF",
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <ImageBackground
            source={require("../assets/img/userBg.png")}
            style={{
              width: 200,
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 25,
            }}
          >
            <Image
              source={require("../assets/img/profile.jpg")}
              style={{
                width: 140,
                height: 140,
                resizeMode: "contain",
                borderRadius: 150,
              }}
            />
          </ImageBackground>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "white",
          marginTop: 25,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          shadowColor: "gray",
          shadowOffset: { width: 0, height: 20 },
          shadowOpacity: 1,
          shadowRadius: 25,
          elevation: 5,
          paddingBottom: 50,
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 15,
            gap: 15,
          }}
        >
          <View
            style={{
              borderBottomColor: "#95F3FF",
              borderBottomWidth: 4,
              width: "20%",
              borderRadius: 15,
            }}
          ></View>
          <Text>{user.username}</Text>
        </View>
     

        <Text
          style={{
            fontWeight: 500,
            marginLeft: 15,
            marginTop: 45,
          }}
        >
          General setting
        </Text>
        <TouchableOpacity
         onPress={() => navigation.navigate("EditProfile")}
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            alignSelf: "center",
            paddingHorizontal: 15,
            paddingVertical: 15,
            backgroundColor: "#C7F8FF82",
            borderRadius: 5,
            marginTop: 25,
          }}
        >
          <Text>Profile settings</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
        <View
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            alignSelf: "center",
            paddingHorizontal: 15,
            paddingVertical: 15,
            backgroundColor: "#C7F8FF82",
            borderRadius: 5,
            marginTop: 15,
          }}
        >
          <Text>Contact us</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </View>

        <View
          style={{
            marginTop: 45,
          }}
        >
          <Button title={"Logout"} onPress={handleLogout} />
        </View>
      </View>
    </ScrollView>
  );
};

export default UserProfile;
