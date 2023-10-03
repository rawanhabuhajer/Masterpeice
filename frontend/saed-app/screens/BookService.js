import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { Calendar } from "react-native-calendars";
import Button from "../components/Button";
import { useBooksContext } from "../Hooks/UseBookContext";
import { useNavigation } from "@react-navigation/native";

const BookService = () => {
  const [location, setLocation] = useState();
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const { dispatch } = useBooksContext();
  const navigation = useNavigation();


  const handleBooking = () =>{
    const time = (selectedTime + " " + selectedPeriod);
    dispatch({type : "ADD_BOOK" , payload : { location , date ,selectedPeriod,selectedTime,duration , time}});

    navigation.navigate('Worker')
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
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 100,
              height: 25,
              borderRadius: 25,
              backgroundColor: "#62DFF0",
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "black", // Shadow color
              shadowOffset: { width: 0, height: 2 }, // Shadow offset (x, y)
              shadowOpacity: 1, // Shadow opacity
              shadowRadius: 4, // Shadow radius
              elevation: 4,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: 500,
              }}
            >
              Schedule
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 25,
              borderRadius: 25,
              backgroundColor: "#7FF0FF5C",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Address</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 16,
              fontWeight: 500,
              marginTop: 25,
            }}
          >
            Select date
          </Text>
          <Calendar
            style={styles.calendar}
            onDayPress={(day) => {
              setDate(day.dateString);
            }}
            markedDates={{
              [date]: {
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
            marginTop: 25,
          }}
        >
          Available time
        </Text>

        <View style={styles.containerp}>
          <Picker
            selectedValue={selectedPeriod}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedPeriod(itemValue)
            }
            style={styles.picker1}
            itemStyle={styles.pickerItem}
          >
            <Picker.Item label="select term" value="unselected" enabled={false} />
            <Picker.Item label="Morning" value="Am" />
            <Picker.Item label="Evening" value="Pm" />
          </Picker>
        </View>

        <View style={styles.containerpicker}>
          <Picker
            selectedValue={selectedTime}
            onValueChange={(itemValue, itemIndex) => setSelectedTime(itemValue)}
            style={styles.picker}
            itemStyle={styles.pickerItem}
          >
            <Picker.Item label="1:00" value="1:00" />
            <Picker.Item label="2:00" value="2:00" />
            <Picker.Item label="3:00" value="3:00" />
            <Picker.Item label="4:00" value="4:00" />
            <Picker.Item label="5:00" value="5:00" />
            <Picker.Item label="6:00" value="6:00" />
            <Picker.Item label="7:00" value="7:00" />
            <Picker.Item label="8:00" value="8:00" />
            <Picker.Item label="9:00" value="9:00" />
            <Picker.Item label="10:00" value="10:00" />
            <Picker.Item label="11:00" value="11:00" />
            <Picker.Item label="12:00" value="12:00" />
          </Picker>
        </View>

        <View style={styles.container}>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 16,
              fontWeight: 500,
              marginTop: 25,
            }}
          >
            Total hours
          </Text>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 16,
              marginTop: 15,
            }}
          >
            {duration} hr
          </Text>

          <Slider
            style={{ width: "98%", alignSelf: "center", marginTop: 5 }}
            maximumValue={24}
            minimumValue={0}
            thumbTintColor="#00E0FF"
            minimumTrackTintColor="#00E0FF"
            maximumTrackTintColor="#00C9E5"
            step={1}
            value={duration}
            onValueChange={(duration) => setDuration(duration)}
          />
        </View>
        <Text
          style={{
            marginLeft: 15,
            fontSize: 16,
            fontWeight: 500,
            marginTop: 25,
          }}
        >
          Adress
        </Text>
        <TextInput
          onChangeText={(text) => setLocation(text)}
          value={location}
          placeholder="Write your address"
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 10,
            marginTop: 15,
            height: 50,
            width: "92%",
            marginLeft: 15,
            paddingLeft: 15,
          }}
        />

        <Text
          style={{
            marginLeft: 15,
            fontSize: 12,
            color: "gray",
            marginTop: 5,
            marginBottom: 45,
          }}
        >
          ex : Amman-shafa badran
        </Text>
        <Button title={"Next"} onPress={handleBooking} />
        <View style={{ marginBottom: 35 }}></View>
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
    marginTop: 25,
    marginBottom: 15,
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
    marginTop: 15,
  },
  containerpicker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 5,
    width: "92%",
    marginLeft: 15,
  },
  picker: {
    height: 50,
  },

  containerp: {
    width: "40%",
  },
  picker1: {
    width: 150,
  },
});
export default BookService;
