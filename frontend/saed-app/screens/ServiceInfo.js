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
  ActivityIndicator,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import Button from "../components/Button";
import { useBooksContext } from "../Hooks/UseBookContext";
import { ServicesContext } from "../context/ServicesContext";
import { useContext } from "react/cjs/react.development";
import { useRoute } from "@react-navigation/native";


const ServiceInfo = () => {
  const route = useRoute();
  const { services } = useContext(ServicesContext);
  const { dispatch } = useBooksContext();
  const { width } = Dimensions.get("window");
  const [selectedService, setSelectedservice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const height = (width * 80) / 100;
  const { serviceId } = route.params;
  const [service, setService] = useState();
  const navigation = useNavigation();
  
  useEffect(() => {
    const foundService = services.find((service) => service._id === serviceId);

    if (foundService) {
      setSelectedservice(foundService);
      setService(foundService)
    }

    setIsLoading(false);
  }, [services, serviceId]);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#62DFF0" />
      </View>
    );
  }

  if (!selectedService) {
    return (
      <View>
        <Text>service not found</Text>
      </View>
    );
  }
  const handleBooking = () =>{
    dispatch({type : "ADD_BOOK" , payload : service});
    navigation.navigate('BookService')
  }


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
          {selectedService.images.map((item, index) => (
            <ImageBackground
              style={{ width, height, resizeMode: "contain" }}
              source={{ uri: item }}
            key={index}
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
            {selectedService.servicename}
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
          {selectedService.summary}
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
            ${selectedService.servicePrice}/hr
          </Text>
        </View>
        <Text
          style={{
            width: "94%",
            marginLeft: 15,
            fontSize: 13,
            marginTop: 15,
          }}
        >
         {selectedService.description}
        </Text>

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
          <Button title={"Book now"} 
          onPress={handleBooking}
          
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ServiceInfo;
