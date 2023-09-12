import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";

import {
  MaterialIcons,
} from "@expo/vector-icons";
import Button from "../components/Button";
import InputField from "../components/InputField";

const Confirmed = () => {
  return (
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
        marginTop: 15,
      }}
    >
      <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
      <Text style={{ fontWeight: 500 }}>Order Status</Text>
      <Image
        source={require("../assets/icon/schedule.png")}
        style={{
          width: 25,
          height: 25,
        }}
      />
    </View>
    <View style={{
        display: "flex",
        alignItems: "center",
justifyContent:"center",
height:300
      }} >
      <Image  source={require('../assets/img/booked.png')} style={{width: 250,
          height: 260,}}/>
    </View>
    <View>
      <Text style={{textAlign:"center", fontWeight: 500, marginTop: 30 , fontSize: 24, }}>Book placed</Text>
      <Text style={{  textAlign:"center", marginTop: 20 , }}>Your Book has been placed! you will {'\n'} receive E-mail soon. </Text>
      <Text style={{  textAlign:"center", marginTop: 30 , fontSize: 18,marginBottom: 130,}}>Thank you for your trust ! </Text>
      <TouchableOpacity ><Text style={{  textAlign:"center", fontSize: 12}}>* For any inquiries please <Text style={{color:"#3FC2D4"}}>click Here!</Text></Text></TouchableOpacity>  

    </View>
</ScrollView>
  )
}

export default Confirmed