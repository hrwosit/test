import { Link } from '@material-ui/core';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View ,Image,Button,Icon,TextInput} from 'react-native';
import main from '../assets/main.png'; 
import sp from '../assets/sp.jpg'; 
import Mission from './Mission';

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

 
class Book  extends React.Component {
constructor(props) {
  super(props);
 
}

render(){
    return (
      
       <View>
         <View>
             <Text style={{fontSize: 42 ,fontStyle:'italic', alignSelf:'center'}}  > Book Your Appointment

             </Text>
             </View>
            <View style={{flex:'end',flexDirection:'row' }} >
            {/* <Button    onPress={() =>  this.props.navigation.navigate('Mission')}> hello mission completed </Button> */}
           <Image  source={main}  style={{width: '25%', height: '150px' ,marginRight: '12%', borderRadius: 10,}} />  
           <Image source={sp} style={{width: '25%', height: '150px',marginRight: '12%', borderRadius: 10, }} />    
           <Image source={main} style={{width: '25%', height: '150px',marginRight: '12%' , borderRadius: 10,}} />    
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
export default Book;