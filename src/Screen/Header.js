

import React from 'react';
import { StyleSheet, Text, View ,Image, Button} from 'react-native';
import Swipe from '../Swipe';
import Reg from '../Reg'
  import Services from '../Services';
// // import  FormDialog from './src/Form';
//  import Header from '..Header';

import Book from '../Book';
import Order from '../Order';
// import Login from './src/Login';
// //  import sp from './assets/sp.jpg'; 
// //  import main from './assets/main.png'; 
 import Foot from '../Foot';
//  import slogo from '.../assets/slogo.png';
// import Mission from './Mission';
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
 
class Header  extends React.Component {
  constructor(props) {
    super(props);
   
  }
  render() {
    return (
      
      <View style={{flex:1  }}>
        
 <View style={{  backgroundColor:'#1f2d61' ,
    height: '61px',
    justifyContent: 'center',
    // alignItems:' center',
    flex:1
}}  >
     <View  style={{alignSelf:'flex-start', }}>
     <Image source={slogo} style={{  width: 86,    height: 52}} />  
     </View> 

   <View style={{flexDirection:'row',alignSelf:'flex-end',alignItems:'center'}} >

    <Button color='transparent'  title="Mission"  onPress={() =>  this.props.navigation.navigate('Mission')}/>
    <Button color='transparent'  title="Product" onPress={() =>  this.props.navigation.navigate('Product')}/>
    <Button  color='transparent'    title="Contact" onPress={() =>  this.props.navigation.navigate('Contact')}/>
  {/* <Mission/> */}
  </View>
  
  </View>
  .;skdfs;lk
  ;g
  <View>
  <View style={{flexDirection:'row' ,alignItems:'center' }}>
    <Swipe/>
    <Reg/>
  </View>
  
</View>   
          <View> 
           <Book/>
         </View>
         <View> 
           <Order/>
         </View>
          
     <View>
         <Services/>
                 </View>
       <View style={{backgroundColor:'#1f2d61'}} >
         <Foot/>

         </View>
       {/* <View>         <Bottom/>
      </View> */} {/*          

      <Signup/>
         <Login/> */}
        

  </View>
    );
  }
}



export default Header;

//   render() {
//     return (
      
//       <View style={{flex:1}}>

//          <Header/>
//          <View style={{flexDirection:'row' }}>
        

//          <Swipe/>
//          <View style={{justifyContent:'center',alignItems:'center' ,flex:1 }}>
//          <Reg/>
//          </View>
        
//          </View>
//          <View> 
//           <Book/>
//         </View>
//         <View> 
//           <Order/>
//         </View>
//         {/* <View>
//           < FormDialog/>
//         </View> */}
//         <View>
//           <Services/>
//         </View>
//         <View style={{backgroundColor:'#1f2d61'}} >
//           <Foot/>

//         </View>
//         {/* <View>
//           <Bottom/>
//         </View> */}
// {/*          

//          <Signup/>
//          <Login/> */}
        
        


// import React from 'react';
// import { SafeAreaView, View, Text, StyleSheet,Button,Image } from 'react-native';
// import Toptab from './Toptab';
// import slogo from '../assets/slogo.png';
// const Header = ({ onBack, title }) => (
//   <SafeAreaView style={styles.headerContainer}>
    
//     <View style={styles.header}>
//     <Image source={slogo} style={{ 
//     width: 86,
//     height: 78,}} />   
//       <View style={styles.headerCenter}>
//       {/* <Image source={slogo} style={{width:22,height:72}} />    */}
//         <View  style={styles.content }>
//       <Text style={{color: '#fff' , fontSize:18}}
//       onPress={() => Linking.openURL('http://google.com')}>Mission        </Text>
//        <Text style={{color: '#fff',fontSize:18}}
//       onPress={() => Linking.openURL('http://google.com')}>Products/Services        </Text>
//         <Text style={{color: '#fff',fontSize:18}}
//       onPress={() => Linking.openURL('http://google.com')}>Contact Us
        
//           </Text>
//       {/* <Button title="Mission" onPress={() => Alert.alert('Simple Button pressed')} />
//       <Button title="Products/Services" onPress={() => Alert.alert('Simple Button pressed')} />
//       <Button title="Contact Us" onPress={() => Alert.alert('Simple Button pressed')} /> */}
  
//       </View>
     
//       </View>
//     </View>

//   </SafeAreaView>  
  
  
   
// );

// const styles = StyleSheet.create({
//   headerContainer: {
//     alignSelf:'flex-stretch',
//     marginTop:'2',
//     // borderBottomWidth: StyleSheet.hairlineWidth,
//     // borderBottomColor: '#ff4e3f',
//   backgroundColor: '#1f2d61',
//     //  padding: 10,

//   },
//   header: {
//     // padding: 10,
//     paddingVertical: 5,
//     // alignItems: 'center',
//     flexDirection: 'row',
//     minHeight: 50
//   },
//   content:{ 
//     flexDirection: 'row',
//     alignItems: 'center',  
//     marginLeft:'70%',
//     marginTop:'9',
//     textAlign: '',
//     color: 'white',
   
    
      

//   },
//   headerCenter: {
//     flex: 2,
//     // order: 3
//   },
//   headerLeft: {
//     order: 1,
//     width: 70
//   },
//   headerRight: {
//     order: 3,
//     width: 80
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: '600',
//     textAlign: 'left',
//     color: 'white',
//    marginTop:'12'
  
//   },
// });

// export default Header;



