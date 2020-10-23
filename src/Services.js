import * as React from 'react';
import { Text, View, Image } from "react-native";
import main from '../assets/main.png';

class Services extends React.Component {

  render() {
    return (
        <View>
        <View >
        <Text  style={{fontSize: 42 ,fontStyle:'italic', alignSelf:'center'}} > Services All We Provided </Text>
        </View>
      <View style={{ flex: 1, alignItems: "center",flexDirection:'row',  marginRight: '12%',}}>
           
        <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: "hidden" }}>
          <View style={{height: 135}}>
          <Image source={main} style={{width: 155, height: '150px' , marginRight: '12%'}} />    
          </View>
          <View style={{ fontSize:22, padding: 10, width: 155 }}>
            <Text>Title</Text>
            <Text style={{ color: "#1f2d61", paddingTop: 5 }}>
              Description of the image
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: "hidden",marginLeft: '12%' }}>
          <View style={{height: 135}}>
          <Image source={main} style={{width: 155, height: '150px' }} />    
          </View>
          <View style={{ padding: 10, width: 155 }}>
            <Text>Title</Text>
            <Text style={{ color: "#1f2d61", paddingTop: 5 }}>
              Description of the image
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: "hidden",marginLeft: '12%' }}>
          <View style={{height: 135}}>
          <Image source={main} style={{width: 155, height: '150px' }} />    
          </View>
          <View style={{ padding: 10, width: 155 }}>
            <Text>Title</Text>
            <Text style={{ color: "#1f2d61", paddingTop: 5 }}>
              Description of the image
            </Text>
          </View>
        </View>
      </View>
      </View>
    );
  }
}
export default  Services;