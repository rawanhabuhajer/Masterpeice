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
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
  Feather,
} from "@expo/vector-icons";

import { useRoute } from "@react-navigation/native";
import { ExpertsContext } from "../context/ExpertsContext";
import { useBooksContext } from "../Hooks/UseBookContext";

const ExpertProfile = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [expert, setExpert] = useState();
  const { expertId } = route.params;
  const { experts } = useContext(ExpertsContext);
  const { dispatch } = useBooksContext();

  useEffect(() => {
    const foundExpert = experts.find((expert) => expert._id === expertId);

    if (foundExpert) {
      setSelectedExpert(foundExpert);
      setExpert(foundExpert);
    }

    setIsLoading(false);
  }, [experts, expertId]);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#62DFF0" />
      </View>
    );
  }

  if (!selectedExpert) {
    return (
      <View>
        <Text>Expert not found</Text>
      </View>
    );
  }
  const handleBooking = () => {
    dispatch({ type: "ADD_BOOK", payload: expert });
    navigation.navigate("Checkout");
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
              width: 180,
              height: 180,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 25,
            }}
          >
            {selectedExpert.gender === "Male" ? (
              <Image
                source={require("../assets/img/man.png")}
                style={{
                  width: 115,
                  height: 115,
                  resizeMode: "contain",
                  borderRadius: 150,
                }}
              />
            ) : (
              <Image
                source={require("../assets/img/expert.png")}
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: "contain",
                  borderRadius: 150,
                }}
              />
            )}
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
          <Text
            style={{
              fontSize: 16,
              fontWeight: 500,
              marginTop: 5,
            }}
          >
            {selectedExpert.expertname}
          </Text>
          <Text
            style={{
              textAlign: "center",
              marginLeft: 15,
              fontSize: 13,
              width: "80%",
            }}
          >
            {selectedExpert.about}
          </Text>
        </View>

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
            About expert
          </Text>
        </View>

        <View
          style={{
            width: "95%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <View
            style={{
              width: "40%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
              gap: 13,
              marginLeft: 15,
            }}
          >
            <FontAwesome name="transgender" size={20} color="#39BFEF" />

            <Text>{selectedExpert.gender}</Text>
          </View>
          <View
            style={{
              width: "40%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
              gap: 10,
              marginLeft: 12,
            }}
          >
            <Ionicons name="location-outline" size={22} color="#39BFEF" />

            <Text>{selectedExpert.location}</Text>
          </View>
          <View
            style={{
              width: "40%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
              gap: 10,
              marginLeft: 15,
            }}
          >
            <Feather name="phone" size={20} color="#39BFEF" />
            <Text>{selectedExpert.tel}</Text>
          </View>

          <View
            style={{
              width: "40%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
              gap: 10,
              marginLeft: 15,
            }}
          >
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color="#39BFEF"
            />

            <Text>{selectedExpert.email}</Text>
          </View>
        </View>
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
              gap: 10,
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
              <AntDesign name="star" size={22} color="#FFDC64" />
              <Text style={{ fontWeight: 400 }}>{selectedExpert.review}</Text>
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
              <Text style={{ fontWeight: 400 }}>{selectedExpert.jobs}</Text>
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
              <Text style={{ fontWeight: 400 }}>
                {selectedExpert.experience}
              </Text>
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
          specialties
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 25,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 25,
          }}
        >
          {selectedExpert.services.map((service, index) => (
            <View
              key={index}
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/icon/landry-home.png")}
                style={{
                  width: 55,
                  height: 55,
                  resizeMode: "contain",
                }}
              />
              <Text style={{ fontSize: 10 }}>{service}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity
          onPress={handleBooking}
          style={{
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 5,
            backgroundColor: "#6FEEFF",
            width: 250,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 54,
          }}
        >
          <Text
            style={{ color: "#353535", textAlign: "center", fontWeight: 500 }}
          >
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ExpertProfile;
