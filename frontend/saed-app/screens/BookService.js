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
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import InsetShadow from "react-native-inset-shadow";

import {
  Calendar,
  calendar,
  CalendarList,
  calendarlist,
  Agenda,
  agenda,
} from "react-native-calendars";
const BookService = () => {
  const [values, setValues] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [selected, setSelected] = useState("");

  const handleValueChange = (newValue) => {
    setValues(newValue);
  };

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
            paddingVertical: 35,
          }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          <Text style={{ fontWeight: 500 }}>prepare booking</Text>
          <Image
            source={require("../assets/icon/schedule.png")}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </View>
        <View
          style={{
            width: 245,
            height: 50,
            borderRadius: 25,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            shadowColor: "gray",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.9,
            shadowRadius: 8,
            elevation: 7,
            alignSelf:"center"
          }}
        >
          <View
            style={{
              width: 100,
              height: 25,
              borderRadius: 25,
              backgroundColor: "#62DFF0",
              alignItems:"center",
              justifyContent:"center",
              shadowColor: 'black', // Shadow color
              shadowOffset: { width: 0, height: 2 }, // Shadow offset (x, y)
              shadowOpacity: 1, // Shadow opacity
              shadowRadius: 4, // Shadow radius
              elevation: 4, 
            }}
          >
            <Text style={{
            color:"#fff",
            fontWeight:500
            }} >Schedule</Text>
          </View>
          <View
            style={{
              width: 100,
              height: 25,
              borderRadius: 25,
              backgroundColor: "#7FF0FF5C",
              alignItems:"center",
              justifyContent:"center"
            }}
          >
            <Text>Address</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}><Text style={{fontWeight: 500,}}>Total hours :</Text> {sliderValue}</Text>

          <Slider
            style={{width: "100%"}}
            maximumValue={24}
            minimumValue={0}
            thumbTintColor="#00E0FF"
            minimumTrackTintColor="#00E0FF"
            maximumTrackTintColor="#00C9E5"
            step={1}
            value={sliderValue}
            onValueChange={(sliderValue) => setSliderValue(sliderValue)}
          />
        </View>
        <View>
        <Text
            style={{
              marginLeft: 15,
              fontSize: 16,
              fontWeight: 500,
              marginTop:25
            }}
          >
           Select date
          </Text>
          <Calendar
            style={styles.calendar}
            onDayPress={(day) => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: "orange",
              },
            }}
          />
        </View>
        <Text
            style={{
              marginLeft: 15,
              fontSize: 16,
              fontWeight: 500,
              marginTop:25
            }}
          >
           Available time
          </Text>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "center",
  },
  title: {
    marginLeft: 15,
    fontSize: 16,
    marginTop:25,
    marginBottom:15,
   
  },

  calendar: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 7,
    marginBottom: 15,
    padding: 10,
    marginTop:15
  },
});
export default BookService;
