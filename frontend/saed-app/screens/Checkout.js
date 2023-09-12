import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  Pressable,
  Image,

  TextInput
} from "react-native";

import {
  MaterialIcons,
} from "@expo/vector-icons";
import Button from "../components/Button";
import InputField from "../components/InputField";

const Checkout = () => {
  const [cardNumber , setCardNumber] = useState('')
  const pay = "50.00"
  const img = require("../assets/icon/Card-Flags.png")
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
        <View
          // style={{
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "space-between",
          //   width: "95%",
          //   marginTop: 15,
          // }}
        >
          <Text style={{ marginLeft: 15 }}>Deep Cleaning</Text>

          <Text
            style={{
              fontWeight: 500,
              marginLeft: 15,
              fontSize: 28,
              marginTop: 10,
            }}
          >
            $50.00
          </Text>
        </View>
        <Image
          source={require("../assets/icon/home-deep.png")}
          style={{
            width: 60,
            height:60,
          }}
        />
      </View>
      <Text
        style={{ marginLeft: 15, fontSize: 12, marginTop: 5, color: "gray" }}
      >
        Thorough deep cleaning for your home
      </Text>
      <Text style={{ fontWeight: 500, marginLeft: 15, marginTop: 40 }}>
      Payment method
      </Text>
      <Text
        style={{ marginLeft: 15, fontSize: 12, marginTop: 5, color: "gray" }}>
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
        marginLeft:15
      }}
    >
     <Image
     source={img}
     style={{marginLeft: 15}}
     />
      <TextInput
        value=''
        // onChangeText=""
        secureTextEntry={true}
        style={{
          marginVertical: 10,
          width: 300,
          fontSize: 14,
          paddingLeft: 5,
        }}
        placeholder="card number"
      
      />
    </View>
    <View 
    style={{
      width:"95%",
      marginLeft:15
    }}
    >

    <InputField
//  value={email}
//  onChangeText={setEmail}
 placeholder={"Name on card"}
 user={"user"}
/>
    </View>
    <View
    
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      
      alignItems: "center",
      marginBottom: 50,
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
        marginLeft:15,
        width:"45%"
      }}
    >
    
      <TextInput
        value=''
        onChangeText=""
        secureTextEntry={true}
        
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
        marginLeft:15,
        width:"45%"
      }}
    >
    
      <TextInput
        value=''
        onChangeText=""
        secureTextEntry={true}
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
</View>

<Button title= {`pay $${pay}`}/>
      
    </ScrollView>
  );
};

export default Checkout;
