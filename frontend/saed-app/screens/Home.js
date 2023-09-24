import React, { useState, useEffect , useContext} from "react";
import {
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useBooksContext } from "../Hooks/UseBookContext";
import { FontAwesome } from "@expo/vector-icons";
import { UserContext } from "../context/AuthContext";

const Home = () => {
  const { dispatch } = useBooksContext();
  const { user, setUser } = useContext(UserContext);

  const [data, setData] = useState(null);
  const images = [
    require("../assets/img/girl2.png"),
    require("../assets/img/lundry.png"),
    require("../assets/img/farm.png"),
  ];
  const { width } = Dimensions.get("window");
  const height = (width * 80) / 100;
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("user");
        console.log("Stored Data:", storedData);
        dispatch({type : "ADD_BOOK" , payload : user });
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
    console.log("hello",experts);

    fetchExperts();
    fetchData();

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
            onPress={() => navigation.navigate("Categories")}
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
            onPress={() => navigation.navigate("Categories")}
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
            onPress={() => navigation.navigate("Categories")}
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
            onPress={() => navigation.navigate("Categories")}
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
              marginBottom:35
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
      
      </ScrollView>
    </>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default Home;
