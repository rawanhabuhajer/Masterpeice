import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons, Ionicons , AntDesign , MaterialIcons} from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useBooksContext } from "../Hooks/UseBookContext";
import { UserContext } from "../context/AuthContext";
import axios from "axios";
import { ExpertsContext } from "../context/ExpertsContext";

const Home = () => {
  const { dispatch } = useBooksContext();
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState(null);
  const [currentImages, setCurrentImages] = useState(newImages);
  const { experts, setExperts } = useContext(ExpertsContext);

  const topExperts = experts
  .slice() 
  .sort((a, b) => b.review - a.review) 
  .slice(0, 5);
  const newImages = [
    require("../assets/img/girl2.png"),
    require("../assets/img/lundry.png"),
    require("../assets/img/farm.png"),
  ];
  const popularImages = [
    require("../assets/img/after-slider.jpg"),
    require("../assets/img/car-sliderjpg.jpg"),
    require("../assets/img/pest-slider.png"),
  ];
  const trendingImages = [
    require("../assets/img/window-slider.jpg"),
    require("../assets/img/lundry.png"),
    require("../assets/img/farm.png"),
  ];
  const saleImages = [
    require("../assets/img/orgnize.png"),
    require("../assets/img/farms.png"),
    require("../assets/img/pest-slider.png"),
  ];
  const { width } = Dimensions.get("window");
  const height = (width * 80) / 100;
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("user");
        dispatch({ type: "ADD_BOOK", payload: user });
        setIsLoading(false);
        if (storedData !== null) {
          setIsLoading(false);

          setData(JSON.parse(storedData));
        } else {
          setIsLoading(false);
          setData(null);
        }
      } catch (error) {
        setIsLoading(false);
        console.error("Error retrieving data from AsyncStorage:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const response = await axios.get(
          "https://vercel-9nlvq4v5v-rawanhabuhajer.vercel.app/api/experts"
        );
        if (response.status === 200) {
          const ExpertsData = response.data.data.experts;

          setExperts(ExpertsData);

          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        if (error.response) {
          setIsLoading(false);
        } else if (error.request) {
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      }
    };

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
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <ImageBackground
          style={{ width, height, resizeMode: "contain", borderRadius: 25 }}
          source={require("../assets/img/blob.png")}
        >
          <View
            style={{
              display: "flex",
              alignItems:"flex-end",
              marginTop:55,
              marginRight:20
            }}
          >
        
        
        </View>
        
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 25,
              marginLeft: 25,
              width: "80%",
            }}
          >
            <Text style={{ color: "#171717", fontWeight: 700, fontSize: 22 }}>
              Welcome,
            </Text>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
                position: "absolute",
                top: 0,
                left: 205,
              }}
              source={require("../assets/img/user.png")}
            ></Image>
          </View>
          <View style={{ marginLeft: 25, marginTop: 2 }}>
            <Text
              style={{
                fontWeight: 400,
                fontSize: 14,

                color: "gray",
              }}
            >
              {data ? data.username : "No data found"}
            </Text>

            <Text
              style={{
                fontWeight: 400,
                fontSize: 11,
                marginTop: 20,
                color: "#171717",
                width: "70%",
              }}
            >
              "Leave the cleaning to us while you
            </Text>
            <Text
              style={{
                fontWeight: 400,
                fontSize: 11,
                marginLeft: 1,
                color: "#171717",
                width: "70%",
              }}
            >
              focus on what truly matters."
            </Text>
            <Pressable
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                gap: 7,
                marginTop: 15,
              }}
            >
              <MaterialCommunityIcons
                name="chevron-triple-down"
                size={24}
                color="#00D0EC"
              />
            </Pressable>
          </View>
        </ImageBackground>

        <View
          style={{
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "row",
            width: "90%",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 15,
            marginBottom: 30,
          }}
        >
          <Pressable
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 5,
              paddingHorizontal: 15,
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#D0F9FF",
              borderRadius: 10,
            }}
            onPress={() => setCurrentImages(newImages)}
          >
            <Text>New</Text>
          </Pressable>
          <Pressable
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 5,
              paddingHorizontal: 15,
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#D0F9FF",
              borderRadius: 10,
            }}
            onPress={() => setCurrentImages(popularImages)}
          >
            <Text>Popular</Text>
          </Pressable>
          <Pressable
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 5,
              paddingHorizontal: 15,
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#D0F9FF",
              borderRadius: 10,
            }}
            onPress={() => setCurrentImages(trendingImages)}
          >
            <Text>Trending</Text>
          </Pressable>
          <Pressable
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 5,
              paddingHorizontal: 15,
              backgroundColor: "#D0F9FF",
              borderRadius: 10,
            }}
            onPress={() => setCurrentImages(saleImages)}
          >
            <Text>Sale</Text>
          </Pressable>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
          }}
        >
          {currentImages && currentImages.length > 0 && (
            <SliderBox
              images={currentImages}
              autoPlay
              circleLoop
              dotColor={"#13274F"}
              inactiveDotColor="#393E46"
              ImageComponentStyle={{
                width: "92%",
                borderRadius: 15,
              }}
            />
          )}
        </View>
        <View
          style={{
            marginLeft: 15,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              fontWeight: 700,
              fontSize: 16,
              marginTop: 25,
            }}
          >
            All categories
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginTop: 25,
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("Categories")}
            style={{
              width: 135,
              height: 110,
              backgroundColor: "#F2FDFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              gap: 12,
              shadowColor: "gray",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 4,
            }}
          >
            <Image
              style={{
                width: "30%",
                height: "38%",
              }}
              source={require("../assets/icon/home.png")}
            />
            <Text style={{ fontWeight: 500, fontSize: 12 }}>Home services</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Categories")}
            style={{
              width: 135,
              height: 110,
              backgroundColor: "#EDFFF3",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              gap: 12,
              shadowColor: "gray",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 4,
            }}
          >
            <Image
              style={{
                width: "30%",
                height: "38%",
              }}
              source={require("../assets/icon/office.png")}
            />
            <Text style={{ fontWeight: 500, fontSize: 12 }}>
              Office services
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Categories")}
            style={{
              width: 135,
              height: 110,
              backgroundColor: "#FFF5ED",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              gap: 12,
              shadowColor: "gray",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 4,
            }}
          >
            <Image
              style={{
                width: "30%",
                height: "38%",
              }}
              source={require("../assets/icon/car.png")}
            />
            <Text style={{ fontWeight: 500, fontSize: 12 }}>Car services</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Categories")}
            style={{
              width: 135,
              height: 110,
              backgroundColor: "#F1F0FF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              gap: 12,
              shadowColor: "gray",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 4,
            }}
          >
            <Image
              style={{
                width: "31%",
                height: "38%",
              }}
              source={require("../assets/icon/pest.png")}
            />
            <Text style={{ fontWeight: 500, fontSize: 12 }}>
              Other services
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            marginTop: 45,
            marginLeft: 15,
          }}
        >
          <Text
            style={{
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            Top Experts
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "92%",
              marginLeft: 15,
              marginTop: 25,
              gap: 20,
              marginBottom: 35,
            }}
          >
            {topExperts.map((expert,index) => (
              <View
              key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {expert.gender === "Female" ? (
                  <Image
                    source={require("../assets/img/expert.png")}
                    style={{
                      width: 80,
                      height: 80,
               
                    }}
                  />
                ) : (
                  <Image
                    source={require("../assets/img/man-expert.png")}
                    style={{
                      width: 80,
                      height: 80,
                    
                    }}
                  />
                )}

                <Text  style={{
                    marginTop: 5,
                    fontWeight: 400,
                  }}>{expert.expertname}</Text>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 7,
                    marginTop:7
                  }}
                >
                  <AntDesign name="star" size={20} color="#FFDC64" />

                  <Text>{expert.review}</Text>
                </View>
              </View>
            ))}
          </Pressable>
        </ScrollView>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
export default Home;
