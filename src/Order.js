import React from 'react';
import { StyleSheet, Text, View ,Image,Button,Icon,TextInput} from 'react-native';
import main from '../assets/main.png'; 
import splash from '../assets/splash.png'; 


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
 
 class Reg  extends React.Component {
  render() {
    return (
      
       <View>
         <View>
             <Text style={{fontSize: 42 ,fontStyle:'italic' , alignSelf:'center'}}  > Give Your Order

             </Text>
             </View>
            <View style={{flex:'end',flexDirection:'row'}} >
                 <Image source={main} style={{width: '25%', height: '150px' , marginRight: '12%', borderRadius: 10}} />    
                 <Image source={splash} style={{width: '25%', height: '150px' ,marginRight: '12%', borderRadius: 10 }} />    
                 <Image source={main} style={{width: '25%', height: '150px', marginRight: '12%', borderRadius: 10 }} />    
             </View>
             </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'60%',
  
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
 
});
export default Reg;