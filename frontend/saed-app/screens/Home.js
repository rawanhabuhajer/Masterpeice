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
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import LinearGradient from "react-native-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
const Home = () => {
  const images = [
    require("../assets/img/girl2.png"),
    require("../assets/img/lundry.png"),
    require("../assets/img/farm.png"),
  ];
  const { width } = Dimensions.get("window");
  const height = (width * 80) / 100;
  const [os, setOs] = useState(Platform.OS);
  const [barColor, setBarColor] = useState();
  return (
    <>
      {os === "android" && (
        <StatusBar barStyle={"dark-content"} backgroundColor={barColor} />
      )}
      {os === "ios" && <View style={{ marginTop: 50 }}></View>}

      <ScrollView style={{ backgroundColor: "#fff" }}>
        <ImageBackground
          style={{ width, height, resizeMode: "contain", borderRadius: 25 }}
          source={require("../assets/img/blob.png")}
        >
          <View
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <View
              style={{
                width: 130,
                height: 30,
                borderRadius: 8,
                backgroundColor: "white",
                shadowColor: "black",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 4,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                paddingLeft: 6,
              }}
            >
              <Ionicons name="ios-location-sharp" size={16} color="#00D0EC" />
              <Text style={{ fontSize: 11 }}>Amman - 4th circle</Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 35,
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
              Carolina Robinson
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
              backgroundColor: "#82EFFF",
              borderRadius: 10,
            }}
          >
            <Text>Sale</Text>
          </Pressable>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
          }}
        >
          <SliderBox
            images={images}
            autoPlay
            circleLoop
            dotColor={"#13274F"}
            inactiveDotColor="#393E46"
            ImageComponentStyle={{
              width: "92%",
              borderRadius: 15,
            }}
          />
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
            style={{
              width: 110,
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
                height: "30%",
              }}
              source={require("../assets/icon/home.png")}
            />
            <Text style={{ fontWeight: 500, fontSize: 12 }}>Home services</Text>
          </Pressable>
          <Pressable
            style={{
              width: 110,
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
                height: "30%",
              }}
              source={require("../assets/icon/office.png")}
            />
            <Text style={{ fontWeight: 500, fontSize: 12 }}>
              Office services
            </Text>
          </Pressable>
          <Pressable
            style={{
              width: 110,
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
                height: "30%",
              }}
              source={require("../assets/icon/car.png")}
            />
            <Text style={{ fontWeight: 500, fontSize: 12 }}>Car services</Text>
          </Pressable>
          <Pressable
            style={{
              width: 110,
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
                width: "30%",
                height: "30%",
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
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "contain",
                }}
                source={require("../assets/img/women.png")}
              ></Image>
              <Text>name</Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "contain",
                }}
                source={require("../assets/img/man.png")}
              ></Image>
              <Text>name</Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "contain",
                }}
                source={require("../assets/img/man.png")}
              ></Image>
              <Text>name</Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "contain",
                }}
                source={require("../assets/img/women.png")}
              ></Image>
              <Text>name</Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "contain",
                }}
                source={require("../assets/img/women.png")}
              ></Image>
              <Text>name</Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "contain",
                }}
                source={require("../assets/img/man.png")}
              ></Image>
              <Text>name</Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "contain",
                }}
                source={require("../assets/img/women.png")}
              ></Image>
              <Text>name</Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "contain",
                }}
                source={require("../assets/img/man.png")}
              ></Image>
              <Text>name</Text>
            </View>
          </Pressable>
        </ScrollView>
        <View
          style={{
            marginTop: 45,
            marginLeft: 15,
            display: "flex",
            flexDirection: "row",
            gap: 15,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            Top Services
          </Text>
          <FontAwesome name="sort-amount-desc" size={18} color="#62DFF0" />
        </View>
        <View
          style={{
            marginTop: 25,
            display: "flex",
            gap: 12,
            alignItems: "center",
            marginBottom: 25,
          }}
        >
          <View
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
              alignSelf: "center",
              paddingHorizontal: 15,
              paddingVertical: 15,
              backgroundColor: "#EFFEFF",
              borderRadius: 5,
              marginTop: 5,
            }}
          >
            <Image
              source={require("../assets/icon/top.png")}
              style={{
                width: 30,
                height: 30,
                resizeMode: "contain",
                marginLeft: 5,
              }}
            />
            <Text
              style={{
                fontWeight: 500,
                fontSize: 15,
                color: "#303030",
              }}
            >
              Home service
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
              alignSelf: "center",
              paddingHorizontal: 15,
              paddingVertical: 15,
              backgroundColor: "#EFFEFF",
              borderRadius: 5,
            }}
          >
            <Image
              source={require("../assets/icon/top.png")}
              style={{
                width: 30,
                height: 30,
                resizeMode: "contain",
                marginLeft: 5,
              }}
            />
            <Text
              style={{
                fontWeight: 500,
                fontSize: 15,
                color: "#303030",
              }}
            >
              Deep cleaning
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
              alignSelf: "center",
              paddingHorizontal: 15,
              paddingVertical: 15,
              backgroundColor: "#EFFEFF",
              borderRadius: 5,
            }}
          >
            <Image
              source={require("../assets/icon/top.png")}
              style={{
                width: 30,
                height: 30,
                resizeMode: "contain",
                marginLeft: 5,
              }}
            />
            <Text
              style={{
                fontWeight: 500,
                fontSize: 15,
                color: "#303030",
              }}
            >
              Pest control
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
