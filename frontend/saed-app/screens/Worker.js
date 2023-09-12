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
  TextInput,
} from "react-native";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Button from "../components/Button";
const Worker = () => {
  const [os, setOs] = useState(Platform.OS);
  const [barColor, setBarColor] = useState();
  const navigation = useNavigation();
  const [selected, setSelcted] = useState(false);

  const selectHandler = () => {
    setSelcted(!selected);
  };
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
          <Pressable onPress={() => navigation.navigate("Categories")}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </Pressable>
          <Text style={{ fontWeight: 500 }}>Select Expert</Text>
          <Image
            source={require("../assets/icon/schedule.png")}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </View>
        <Text style={{ fontWeight: 500, marginLeft: 15, marginTop: 20 }}>
          Select Expert
        </Text>
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 7,
              paddingLeft: 15,
              backgroundColor: "#F4FEFF",
              borderRadius: 50,
              height: 45,
              flex: 1,
              marginTop: 10,
            }}
          >
            <TextInput placeholder="Find expert by his name" />
            <Image
              source={require("../assets/icon/search.png")}
              style={{
                width: 45,
                height: 45,
              }}
            />
          </Pressable>
        </View>
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
            onPress={selectHandler}
            style={[
              styles.pressable,
              {
                backgroundColor: selected ? "#B9F7FF" : "white",
              },
            ]}
          >
            <Image
              source={require("../assets/img/expert.png")}
              style={{
                width: 100,
                height: 100,
                position: "absolute",
                top: -50,
                left: 20,
              }}
            />
            <Text
              style={{
                marginTop: 45,
                fontWeight: 500,
              }}
            >
              ExpertName
            </Text>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                gap: 5,
              }}
            >
              <AntDesign name="star" size={24} color="#FFDC64" />

              <Text>4.8</Text>
            </View>
            <Pressable onPress={() => navigation.navigate("ExpertProfile")}>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: 5,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  View profile
                </Text>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={12}
                  color="gray"
                />
              </View>
            </Pressable>
          </Pressable>
          <Pressable
            style={{
              width: 140,
              height: 150,
              backgroundColor: "white",
              borderWidth: 2,
              borderColor: "#56E9FF",
              borderRadius: 15,
              marginTop: 45,
              display: "flex",
              alignItems: "center",
              gap: 5,
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/img/man-expert.png")}
              style={{
                width: 100,
                height: 100,
                position: "absolute",
                top: -50,
                left: 20,
              }}
            />
            <Text
              style={{
                marginTop: 45,
                fontWeight: 500,
              }}
            >
              ExpertName
            </Text>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                gap: 5,
              }}
            >
              <AntDesign name="star" size={24} color="#FFDC64" />

              <Text>4.8</Text>
            </View>
            <Pressable onPress={() => navigation.navigate("ExpertProfile")}>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: 5,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  View profile
                </Text>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={12}
                  color="gray"
                />
              </View>
            </Pressable>
          </Pressable>
          <View style={{ marginTop: 45 }}>
            <Button title={"Confirm"} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pressable: {
    width: 140,
    height: 150,
    borderWidth: 2,
    borderColor: "#56E9FF",
    borderRadius: 15,
    marginTop: 45,
    display: "flex",
    alignItems: "center",
    gap: 5,
    justifyContent: "center",
  },
});
export default Worker;
