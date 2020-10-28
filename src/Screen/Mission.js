import React from 'react';
import { StyleSheet, Text, View ,Image, Button} from 'react-native';

// import Header from './src/Header';
//  import Toptab from './src/Toptab';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
 
export default class Mission  extends React.Component {
  render() {
    return (
      
      <View style={{flex:1 , }}>
        <Text style={{ fontSize:45,alignSelf:"center"}}>
  OUR MISSION 
    Comming soon .....
    </Text>

  </View>
    );
  }
}
