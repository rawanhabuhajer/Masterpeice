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
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { UserContext } from "../context/AuthContext";
import { ServicesContext } from "../context/ServicesContext";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";

const Categories = () => {
  const navigation = useNavigation();
  const [os, setOs] = useState(Platform.OS);
  const [barColor, setBarColor] = useState();
  const { services, setServices } = useContext(ServicesContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "https://vercel-9nlvq4v5v-rawanhabuhajer.vercel.app/api/services/"
        );
        if (response.status === 200) {
          const ServicesData = response.data.data.services;
          setServices(ServicesData);
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

    fetchServices();

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
  const homeServices = services.filter(
    (service) => service.category === "home services"
  );
  const officeServices = services.filter(
    (service) => service.category === "office services"
  );
  const vehicleServices = services.filter(
    (service) => service.category === "vehicle services"
  );
  const otherServices = services.filter(
    (service) => service.category === "other services"
  );



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
          <MaterialIcons name="keyboard-arrow-left" size={24} color="#fff" />
          <Text style={{ fontWeight: 500 }}>Services category</Text>
          <TouchableOpacity
           onPress={() => navigation.navigate("History")}
        
          >
          
          <MaterialIcons name="keyboard-arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
          
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
            gap: 35,
            marginTop: 25,
          }}
        >
          {homeServices.map((service) => (
            <Pressable
              key={service._id}
              onPress={() =>
                navigation.navigate("ServiceInfo", { serviceId: service._id })
              }
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Image
                 source={{ uri: service.imageCover }}
                  style={{ width: 70, height: 70 }}
              />

           
              <Text>{service.servicename}</Text>
            </Pressable>
          ))}
        </View>
        <Text style={{ fontWeight: 500, marginLeft: 15, marginTop: 35 }}>
          Office services
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginLeft: 40,
            gap: 35,
            marginTop: 25,
          }}
        >
          {officeServices.map((service) => (
            <Pressable
            key={service._id}
            onPress={() =>
              navigation.navigate("ServiceInfo", { serviceId: service._id })
            }
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
             <Image
                 source={{ uri: service.imageCover }}
                  style={{ width: 70, height: 70 }}
              />
              <Text>{service.servicename}</Text>
            </Pressable>
          ))}
        </View>
        <Text style={{ fontWeight: 500, marginLeft: 15, marginTop: 35 }}>
          vehicle services
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 35,
            marginTop: 25,
          }}
        >
          {vehicleServices.map((service) => (
             <Pressable
             key={service._id}
             onPress={() =>
               navigation.navigate("ServiceInfo", { serviceId: service._id })
             }
             style={{
               display: "flex",
               alignItems: "center",
               gap: 10,
             }}
           >
              <Image
            source={{ uri: service.imageCover }}
             style={{ width: 70, height: 70 }}
         />
              <Text>{service.servicename}</Text>
            </Pressable>
          ))}
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
            gap: 35,
            marginTop: 25,
            marginBottom: 45,
          }}
        >
          {otherServices.map((service) => (
            <Pressable
            key={service._id}
            onPress={() =>
              navigation.navigate("ServiceInfo", { serviceId: service._id })
            }
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
              <Image
                 source={{ uri: service.imageCover }}
                  style={{ width: 70, height: 70 }}
              />
              <Text>{service.servicename}</Text>
            </Pressable>
          ))}
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
export default Categories;
