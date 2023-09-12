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
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Categories = () => {
  const navigation = useNavigation();
  const [os, setOs] = useState(Platform.OS);
  const [barColor, setBarColor] = useState();

  return (
    <>
      {os === "android" && (
        <StatusBar barStyle={"dark-content"} backgroundColor={barColor} />
      )}
      {os === "ios" && <View style={{ marginTop: 50 }}></View>}

      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 15,
            paddingVertical: 25,
          }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          <Text style={{ fontWeight: 500 }}>Services category</Text>
          <Image
            source={require("../assets/icon/schedule.png")}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </View>

        <Text style={{ fontWeight: 500, marginLeft: 15, marginTop: 20 }}>
          Home services
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 30,
            marginTop: 25,
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("ServiceInfo")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={require("../assets/icon/home-deep.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text>Deep cleaning</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Worker")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={require("../assets/icon/furnature.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text>Furniture</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Worker")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={require("../assets/icon/landry-home.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text>Laundary</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Worker")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={require("../assets/icon/pool.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text>Pools</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Worker")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={require("../assets/icon/cabines-home.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text>Cabines</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Worker")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={require("../assets/icon/gardens.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text>Gardens</Text>
          </Pressable>
        </View>
        <Text style={{ fontWeight: 500, marginLeft: 15, marginTop: 35 }}>
          Office services
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 30,
            marginTop: 25,
            marginLeft: 40,
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("Worker")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={require("../assets/icon/office-deep.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text>Deep cleaning</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Worker")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={require("../assets/icon/office-furnature.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text>Furniture</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Worker")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={require("../assets/icon/window.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text>Windows</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Worker")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={require("../assets/icon/cabines-home.png")}
              style={{ width: 70, height: 70, marginLeft: 10 }}
            />
            <Text>Cabines</Text>
          </Pressable>
        </View>
        <Text style={{ fontWeight: 500, marginLeft: 15, marginTop: 35 }}>
          Vhihcle services
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 30,
            marginTop: 25,
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("Worker")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={require("../assets/icon/car-deep.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text>Deep cleaning</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Worker")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={require("../assets/icon/car-f.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text>Furniture</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Worker")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={require("../assets/icon/esay.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text>Easy clean</Text>
          </Pressable>
        </View>
        <Text style={{ fontWeight: 500, marginLeft: 15, marginTop: 35 }}>
          Other services
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 30,
            marginTop: 25,
            marginLeft: 15,
            marginBottom: 45,
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("Worker")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={require("../assets/icon/farms.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text>Farms</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Worker")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={require("../assets/icon/pestt.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text>Pets control</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Worker")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={require("../assets/icon/after.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text>After building</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};

export default Categories;
