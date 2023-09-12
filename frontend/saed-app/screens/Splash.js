import { View, Image, Animated } from "react-native";
import React, { useRef, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const  navigation = useNavigation();
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('Home'); 
    });
  }, [fadeAnim, navigation]);

  return (

    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}
        >
          <Image
            source={require("../assets/icon/splashicon.png")}
            style={{ width: 170, height: 170 }}
          />
        </Animated.View>
      </View>
    </>
  );
};

export default Splash;
