
import { StylesProvider } from "@material-ui/core";
import React from "react";
import {
  StyleSheet, Text, Image, View, TouchableOpacity, Vibration,Linking,
} from 'react-native';
class Footer extends React.Component{
  render(){
    return(
      
      <View style={{width:'100%', height:'20%'}}>
        <View style={{flex:1, flexDirection:'row'}}>
          <View style={{marginLeft:'5%', marginTop:'1%'}}>

            <Text style={{fontSize:14,color:'#fff'}}> SHOPMIX+</Text>
            <Text style={{fontSize:14,color:'#fff'}}> Home</Text>
            <Text style={{fontSize:14,color:'#fff'}}> The Best Service</Text>
            <Text style={{fontSize:14,color:'#fff'}}> Provider of all the time</Text>
          </View>
        
        <View style={{flex:1,  marginLeft:'12%', alignItems:'center'}}>
          <Text style={{marginTop:'2%',fontSize:14,color:'#fff', textAlign:'center'}}>Follow Us</Text>
            <View style={{flex:1,marginTop:'5%',marginBottom:'1%'}}>
              <Text style={{ color:'#fff', fontSize:14}}> ©2020 SHOPMIX+ | All rights reserved | Terms Of Service | Privacy </Text>
      
            </View>
        </View>
        
        <View style={{flex:1, flexDirection:'row',marginLeft:'-30%'}}>

          <View style={{width:30,height:30, marginRight:'3%',marginTop:'5%'}}>
            <Text onPress={()=>Linking.openURL("https://youtube.com") }>
              <Image style={{width:30,height:30}}
              source={require('../assets/youtube.png')}/>
            </Text>
          </View>

          <View style={{width:30,height:30, marginRight:'3%',marginTop:'5%'}}>
            <Text onPress={()=>Linking.openURL("https://twitter.com")} >
                  <Image style={{width:30,height:30}}
                  source={require('../assets/twitter.png')}/>
            </Text>
          </View>

          <View style={{width:30, height:30, marginRight:'3%',marginTop:'5%'}}>
            <Text onPress={()=>Linking.openURL("https://facebook.com")}>
              <Image style={{width:30,height:30}}
              source={require('../assets/facebook.png')}/>
            </Text>
          </View>

          <View style={{width:30, height:30, marginRight:'3%',marginTop:'5%'}}>
            <Text onPress={()=>Linking.openURL("https://instagram.com")}>
              <Image style={{width:30,height:30}}
              source={require('../assets/instagram.png')}/>
            </Text>
          </View>
          
        </View>
       
 
        <View style={{marginRight:'5%',  marginTop:'1%'}}>
          <Text style={{fontSize:14,color:'#fff'}}>Email </Text>
          <Text style={{fontSize:14,color:'#fff'}}>Message </Text>
          <Text style={{fontSize:14,color:'#fff'}}>Contact Us </Text>
          
        </View>
      </View>
    </View>
      
    );
  }
}

export default Footer
