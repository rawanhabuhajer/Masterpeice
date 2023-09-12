import React, { useState, useEffect } from "react";
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
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import Button from "../components/Button";

const UserProfile = () => {
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
          <Text>User name</Text>
        </View>
        <View>
          <Text style={{
            fontWeight:500,
            marginLeft: 15,
            marginTop:25
          }}>Current booking</Text>
          <View
            style={{
              width: "85%",
              backgroundColor: "#fff",
              paddingHorizontal: 15,
              paddingVertical: 15,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              alignSelf: "center",
              borderRadius: 25,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 4,
              borderWidth: 1,
              borderColor: "#56E9FF",
              borderRadius: 25,
              marginTop:25
            }}
          >
            <View
              style={{
                width: "100%",

                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text>service type :</Text>
              <Text>Deep cleaning</Text>
            </View>
            <View
              style={{
                width: "100%",

                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text>Time :</Text>
              <Text>Thursday</Text>
            </View>
            <View
              style={{
                width: "100%",

                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text>Price :</Text>
              <Text
                style={{
                  color: "green",
                }}
              >
                $35
              </Text>
            </View>
            <View
              style={{
                width: "100%",

                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text>Expert name :</Text>
              <Text>catrina</Text>
            </View>
          </View>
        </View>
    
        <Text style={{
            fontWeight:500,
            marginLeft: 15,
            marginTop:45
          }}>General setting</Text>
          <View 
          style={{
            width:"90%",
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            alignSelf:"center",
            paddingHorizontal:15,
            paddingVertical:15,
            backgroundColor:"#C7F8FF82",
            borderRadius:5,
            marginTop:25
          }}>
            <Text>Profile settings</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </View>
          <View 
          style={{
            width:"90%",
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            alignSelf:"center",
            paddingHorizontal:15,
            paddingVertical:15,
            backgroundColor:"#C7F8FF82",
            borderRadius:5,
            marginTop:15
          }}>
            <Text>Contact us</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </View>
      
        <View
          style={{
            marginTop: 45,
          }}
        >
          <Button title={"Logout"} />
        </View>
      </View>
    </ScrollView>
  );
};

export default UserProfile;
