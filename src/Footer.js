
import { StylesProvider } from "@material-ui/core";
import React from "react";
import {
  StyleSheet, Text, Image, View, TouchableOpacity, Vibration,Linking,
} from 'react-native';
class Footer extends React.Component{
  render(){
    return(
      
      <View style={{flex:1, flexDirection:'row', alignItems:'center', margin:'auto'}}>
       
        
        <View style={{width:50,height:50, marginRight:50,marginTop:90, marginBottom:50}}>
      <Text onPress={()=>Linking.openURL("https://youtube.com")}>
      <Image style={{width:30,height:30}}
      source={require('../assets/youtube.png')}/></Text></View>

<View style={{width:50,height:50, marginRight:50,marginTop:90,  marginBottom:50}}>
      <Text onPress={()=>Linking.openURL("https://twitter.com")}>
      <Image style={{width:30,height:30}}
      source={require('../assets/twitter.png')}/></Text></View>

<View style={{width:50, height:50, marginRight:50, marginTop:90,  marginBottom:50}}>
      <Text onPress={()=>Linking.openURL("https://facebook.com")}>
      <Image style={{width:30,height:30}}
      source={require('../assets/facebook.png')}/></Text></View>


<View style={{width:50, height:50, marginRight:50, marginTop:90,  marginBottom:50}}>
      <Text onPress={()=>Linking.openURL("https://instagram.com")}>
      <Image style={{width:30,height:30}}
      source={require('../assets/instagram.png')}/></Text></View>

<View style={{flex:1, }}>
  <Text style={{fontSize:16, textAlign:'right', color:'#fff'}}> © copyright SHOPMIX+ @2020 
</Text>
</View>
  </View>
      
    );
  }
}

// const styles = StyleSheet.create({
//   footer:{
//     backgroundColor:'green',
//     justifyContent:'center',
//     alignItems:'center',
//     height:50,
//   }
// });
export default Footer
