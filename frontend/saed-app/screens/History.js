import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { UserContext } from "../context/AuthContext";
import axios from "axios";
const History = () => {
  const { user, setUser } = useContext(UserContext);
  const [bookings, setBookings] = useState();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
  
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          'https://vercel-9nlvq4v5v-rawanhabuhajer.vercel.app/api/book'
        );
        if (response.status === 200) {
          const bookingData = response.data.data.bookings;
          setBookings(bookingData);
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
  return (
    <>
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
          <Text style={{ fontWeight: 500 }}>booking history</Text>
          <Image
            // source="{"require("../assets/icon/schedule.png")"}"
            style={{
              width: 25,
              height: 25,
            }}
          />
        </View>

        <Text
          style={{
            fontWeight: 500,
            marginLeft: 15,
          }}
        >
          Latest booking
        </Text>

        <View>
          {isLoading ? (
            <Text>isLoading...</Text>
          ) : (
            <View>
              {bookings.map((booking) => (
                <View key={booking._id}>
                  <View
                    style={{
                      width: "92%",
                      height:165,
                      backgroundColor: "#fff",
                      paddingHorizontal: 15,
                      paddingVertical: 15,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      alignSelf: "center",
                      borderRadius: 25,
                      shadowColor: "black",
                      shadowOffset: { width: 0, height: 8 },
                      shadowOpacity: 0.1,
                      shadowRadius: 4,
                      elevation: 4,
                      borderWidth: 1,
                      borderColor: "#56E9FF",
                      borderRadius: 25,
                      marginTop: 25,
                      marginBottom: 5,
                    }}
                  >
                    <View
                      style={{
                        width: "100%",

                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text>service :</Text>
                      <Text>{booking.service.servicename}</Text>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text>Date :</Text>
                      <Text>{new Date(booking.date).toLocaleDateString()}</Text>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text>Time :</Text>
                      <Text>{booking.time}</Text>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text>Clean duration :</Text>
                      <Text>{booking.duration} hours</Text>
                    </View>
              
                    <View
                      style={{
                        width: "100%",

                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text>Expert name :</Text>
                      <Text>{booking.expert.expertname}</Text>
                    </View>
                    <View
                      style={{
                        width: "100%",

                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text>Total price :</Text>
                      <Text
                        style={{
                          color: "green",
                        }}
                      >
                        ${booking.price}.00
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          )}
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
export default History;
