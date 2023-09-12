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
  Octicons,
  AntDesign,
} from "@expo/vector-icons";
import Button from "../components/Button";
const imges = [
  "https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/4239032/pexels-photo-4239032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
const ServiceInfo = () => {
  // const [id, setId] = useState(route.params.id);
  // const [product, setProduct] = useState();

  const { width } = Dimensions.get("window");
  const height = (width * 80) / 100;
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {imges.map((item, index) => (
            <ImageBackground
              style={{ width, height, resizeMode: "contain" }}
              source={{ uri: item }}
              // key={index}
              // source={require("../assets/img/deepclean.jpg")}
            ></ImageBackground>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          backgroundColor: "white",

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
          <Text
            style={{
              fontSize: 16,
              fontWeight: 500,
              marginTop: 5,
            }}
          >
            Deep Cleaning
          </Text>
        </View>

        <Text
          style={{
            textAlign: "center",
            fontSize: 13,
            fontWeight: 400,
            marginTop: 15,
          }}
        >
          Thorough deep cleaning for your home
        </Text>

        <View
          style={{
            width: "95%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          <Text
            style={{
              marginLeft: 15,
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            Description
          </Text>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            $15/hr
          </Text>
        </View>
        <Text
          style={{
            width: "95%",
            marginLeft: 15,
            fontSize: 13,
            marginTop: 15,
          }}
        >
          Our Home Deep Cleaning service is designed to provide you with the
          utmost cleanliness and hygiene in your living space. Our experienced
          team uses state-of-the-art equipment and eco-friendly cleaning
          products to remove dirt, dust, and allergens effectively. From the
          floors to the ceilings, we leave no area untouched. Enjoy a fresh.
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
            marginTop: 35,
          }}
        >
          <Pressable
            style={{
              paddingHorizontal: 20,
              paddingVertical: 20,
              backgroundColor: "#EDFFF3",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              borderRadius: 15,
              gap: 12,
              shadowColor: "gray",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 4,
            }}
          >
            <Text style={{ fontWeight: 500 }}>Reviews</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              <AntDesign name="star" size={24} color="#FFDC64" />
              <Text style={{ fontWeight: 400 }}>4.8</Text>
            </View>
          </Pressable>

          <Pressable
            style={{
              paddingHorizontal: 20,
              paddingVertical: 20,
              backgroundColor: "#FFF5ED",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              borderRadius: 15,
              gap: 12,
              shadowColor: "gray",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 4,
            }}
          >
            <Text style={{ fontWeight: 500 }}>Jobs Done</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Text style={{ fontWeight: 400 }}>24</Text>
            </View>
          </Pressable>

          <Pressable
            style={{
              paddingHorizontal: 20,
              paddingVertical: 20,
              backgroundColor: "#F1F0FF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              borderRadius: 15,
              gap: 12,
              shadowColor: "gray",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 4,
            }}
          >
            <Text style={{ fontWeight: 500 }}>Experience</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Text style={{ fontWeight: 400 }}>4 years</Text>
            </View>
          </Pressable>
        </View>
        <Text
          style={{
            width: "85%",
            marginLeft: 15,
            fontSize: 16,
            fontWeight: 500,
            marginTop: 35,
          }}
        >
          Related services
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 35,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 25,
          }}
        >
          <Pressable
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/icon/laundry.png")}
              style={{
                width: 70,
                height: 70,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 12 }}>laundary</Text>
          </Pressable>
          <Pressable
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/icon/deepcleaning.png")}
              style={{
                width: 70,
                height: 70,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 12 }}>deep cleaning</Text>
          </Pressable>
          <Pressable
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/icon/cabins.png")}
              style={{
                width: 70,
                height: 70,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 12 }}>Cabinets</Text>
          </Pressable>
        </View>
        <View
          style={{
            marginTop: 45,
          }}
        >
          <Button title={"Book now"} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ServiceInfo;
