import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { useBooksContext } from "../Hooks/UseBookContext";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Checkout = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [CVC, setCVC] = useState("");
  const [expired, setCardExpired] = useState("");
  const [error, setError] = useState(null);
  const [book, setBook] = useState();
  const img = require("../assets/icon/Card-Flags.png");
  const { books, dispatch } = useBooksContext();
  const navigation = useNavigation();

  const user = books[3].id;
  const service = books[2]._id;
  const time = books[1].time;
  const date = books[1].date;
  const duration = books[1].duration;
  const expert = books[0]._id;
  const paid = true;
  const fetchPost = async () => {

    try {
            const response = await axios.post(
          "https://vercel-9nlvq4v5v-rawanhabuhajer.vercel.app/api/book",
          {
            user,
            service,
            time,
            date,
            duration,
            expert,
            paid,
          }
        );

        if (response.status === 201) {
          const book = response.data;
          setBook(book);
          dispatch({ type: "ADD_BOOK", payload: book });
          navigation.navigate("Confirmed");
        } else {
          setError("Unexpected response status: " + response.status);
        }
      }
     catch (error) {
      console.error(error); // Log the error for debugging
      if (error.response) {
        const errorMessage = error.response.data.error;
        setError(errorMessage);
      } else if (error.request) {
        setError("Network request failed");
      } else {
        setError("Unexpected error: " + error.message);
      }
    }
  };

  const handleSubmit = async () => {
    try {
      await fetchPost();
    } catch (error) {
      console.error(error);
    }
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
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          paddingVertical: 25,
          marginTop: 15,
        }}
      >
        <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        <Text style={{ fontWeight: 500 }}>Cheackout</Text>
        <Image
          source={require("../assets/icon/schedule.png")}
          style={{
            width: 25,
            height: 25,
          }}
        />
      </View>

      <Text style={{ fontWeight: 500, marginLeft: 15, marginTop: 10 }}>
        Booking summary
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
          alignItems: "center",
          width: "95%",
        }}
      >
        <View>
          <Text style={{ marginLeft: 15 }}>{books[2].servicename}</Text>
          <Text
            style={{
              fontWeight: 500,
              marginLeft: 15,
              fontSize: 28,
              marginTop: 10,
            }}
          >
            ${books[1].duration * books[2].servicePrice}.00
          </Text>
        </View>
        <Image
          source={{ uri: books[2].imageCover }}
          style={{
            width: 60,
            height: 60,
          }}
        />
      </View>
      <Text
        style={{ marginLeft: 15, fontSize: 12, marginTop: 5, color: "gray" }}
      >
        {books[2].summary}
      </Text>
      <Text style={{ fontWeight: 500, marginLeft: 15, marginTop: 40 }}>
        Payment method
      </Text>
      <Text
        style={{ marginLeft: 15, fontSize: 12, marginTop: 5, color: "gray" }}
      >
        Pay by bank card
      </Text>
      <View
        style={{
          marginTop: 10,
          width: "95%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: "#E7FCFF",
            paddingVertical: 5,
            borderRadius: 5,
            marginTop: 20,
            marginLeft: 15,
          }}
        >
          <Image source={img} style={{ marginLeft: 15 }} />
          <TextInput
            value={cardNumber}
            onChangeText={(text) => setCardNumber(text)}
            style={{
              marginVertical: 10,
              width: 300,
              fontSize: 14,
              paddingLeft: 5,
            }}
            placeholder="Card number"
          />
        </View>
        <View
          style={{
            width: "95%",
            marginLeft: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E7FCFF",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 20,
            }}
          >
            <TextInput
              value={cardName}
              onChangeText={(text) => setCardName(text)}
              style={{
                marginVertical: 10,
                width: 300,
                fontSize: 14,
                paddingLeft: 15,
              }}
              placeholder="Name on card"
            />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",

            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E7FCFF",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 20,
              marginLeft: 15,
              width: "45%",
            }}
          >
            <TextInput
              value={expired}
              onChangeText={(text) => setCardExpired(text)}
              style={{
                marginVertical: 10,
                width: 300,
                fontSize: 14,
                paddingLeft: 15,
              }}
              placeholder="MM/YY"
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E7FCFF",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 20,
              marginLeft: 15,
              width: "45%",
            }}
          >
            <TextInput
              value={CVC}
              onChangeText={(text) => setCVC(text)}
              style={{
                marginVertical: 10,
                width: 300,
                fontSize: 14,
                paddingLeft: 15,
              }}
              placeholder="CVC"
            />
          </View>
        </View>
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
      <View
        style={{
          marginTop: 25,
        }}
      >
        <TouchableOpacity

          onPress={() => handleSubmit()}
          style={{
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 5,
            backgroundColor: "#6FEEFF",
            width: 250,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text
            style={{
              color: "#353535",
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            {`Pay $${books[1].duration * books[2].servicePrice}.00`}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  errorText: {
    color: "red",
    marginBottom: 15,
    marginLeft: 15,
    fontSize: 13,
  },
});
export default Checkout;
