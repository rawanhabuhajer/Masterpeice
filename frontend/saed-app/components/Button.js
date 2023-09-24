import React from 'react'
import { TouchableOpacity, Text } from 'react-native';


const Button = ({ onPress, title}) => {
    return (
      <TouchableOpacity onPress={onPress}
       
          
          style={{
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 5,
            backgroundColor:"#6FEEFF",
            width:250,
            marginLeft: "auto",
            marginRight: "auto",
            
           
          }}
        >
          <Text style={{ color: '#353535' , textAlign: "center" , fontWeight:500}}>{title}</Text>
    
      </TouchableOpacity>
    );
  };

export default Button