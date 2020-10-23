import React from "react";
import { Text, TouchableOpacity, View,StyleSheet,Image } from "react-native";
import Swiper from "react-native-web-swiper";
 import bg from '../assets/bg.png'; 
 import sp from '../assets/sp.jpg'; 
 import main from '../assets/main.png'; 

class Swipe extends React.Component {
    render() {
        return (
          <View  style={{width:'70%',height:'240px'}} >
          <View style={{flex:1 }}>
             
              <Swiper
     horizontal   
     
     loop
        timeout={-2.5}
        controlsProps={{
          dotActiveStyle: { backgroundColor: 'red' },
       
        }}
      >
       
          <View>
          <Image source={bg} style={{ width: '100%', height: '300px' }} /> 
           
              
          </View>
          <View>
          <Image source={sp} style={{ width: '100%', height: '300px'}} /> 
            
              
          </View>
          <View>
          <Image source={main} style={{width: '100%', height: '300px' }} /> 
            
              
          </View>
      </Swiper> 
      
              
          </View>
          </View>
        )
    }
}

export default  Swipe;