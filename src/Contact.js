import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

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
      
      <View style={{flex:1}}>
        
   <Text style= {{justifyContent:"center",alignContent:"center"}} >   OUR INFORMATION </Text>
  

  </View>
    );
  }
}