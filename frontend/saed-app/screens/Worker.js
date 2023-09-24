import React, { useState, useEffect, useContext } from "react";
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
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import axios from "axios";
import { ExpertsContext } from "../context/ExpertsContext";

const Worker = () => {
  const [os, setOs] = useState(Platform.OS);
  const [barColor, setBarColor] = useState();
  const navigation = useNavigation();
  const [selected, setSelcted] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {experts , setExperts} = useContext(ExpertsContext)
  
  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const response = await axios.get(
          "https://vercel-9nlvq4v5v-rawanhabuhajer.vercel.app/api/experts"
        );
        if (response.status === 200) {
          const ExpertsData = response.data.data.experts;
          // console.log(ExpertsData)
          setExperts(ExpertsData);
         

          setIsLoading(false);
        } else {
          setError("Unexpected response status: " + response.status);
          setIsLoading(false);
        }
      } catch (error) {
        if (error.response) {
          const errorMessage = error.response.data.error;
          setError(errorMessage);
          setIsLoading(false);
        } else if (error.request) {
          setError("Network request failed");
          setIsLoading(false);
        } else {
          setError("Unexpected error: " + error.message);
          setIsLoading(false);
        }
      }
    };
    console.log("hello",experts);
    fetchExperts();
  }, []);

  if (isLoading) {
    return (
      <>
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#62DFF0" />
        </View>
      </>
    );
  }

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
          {experts.map((expert) => (
            <View key={expert._id}>
              <Pressable
               
                style={[
                  styles.pressable,
                  {
                    backgroundColor: selected ? "#B9F7FF" : "white",
                  },
                ]}
              >
                {expert.gender === "Female" ? (
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
                ) : (
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
                )}
                <Text
                  style={{
                    marginTop: 45,
                    fontWeight: 500,
                  }}
                >
                  {expert.expertname}
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

                  <Text>{expert.review}</Text>
                </View>
                <Pressable onPress={() => navigation.navigate("ExpertProfile" , {expertId : expert._id})}>
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
            </View>
          ))}
          <View style={{ marginTop: 45 }}></View>
          <Button title={"Confirm"} />
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
