/*Example of SQLite Database in React Native*/
import React from 'react';

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';


import Header from './src/Screen/Header';
import Mission from './src/Screen/Mission';
import Product from './src/Screen/Product';
import Contact from './src/Screen/Contact';
import { StyleSheet, Text, View ,Image, Button} from 'react-native';

const App = createStackNavigator(
  {
  Header: {
    screen: Header,
    navigationOptions: {
    //  title: 'SHOPMIX+',
      // headerTitleAlign: 'left',
       headerStyle: { backgroundColor: '#1f2d61' },
      // headerTintColor: '#ffffff',
    header:null
    },
    
  },
  Mission: {
    screen: Mission ,
    
  
  },
  Product: {
    screen: Product ,
    
  
  },
  Contact: {
    screen: Contact ,
    
  
  },

 
});
export default createAppContainer(App);




// // /*Example of SQLite Database in React Native*/
// // import React from 'react';

// // //Import react-navigation
// // import { createAppContainer } from 'react-navigation';
// // import { createStackNavigator} from 'react-navigation-stack';

// // import Header from './src/Header';
// // import Mission from './src/Mission';


// // const App = createStackNavigator({
// //   Header: {
// //     screen: Header,
  
// //   },
// //   Mission: {
// //     screen: Mission ,
  
// //   },
 
// // });
// // export default createAppContainer(App);
// import React from 'react';
// import { StyleSheet, Text, View ,Image,TouchableOpacity,Button,Icon} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import Reg from './src/Reg';
//  import Services from './src/Services';
// // import  FormDialog from './src/Form';
// import Header from './src/Header';
// import Swipe from './src/Swipe';
// import Book from './src/Book';
// import Order from './src/Order';
// // import Login from './src/Login';
// //  import sp from './assets/sp.jpg'; 
// //  import main from './assets/main.png'; 
// import Foot from './src/Foot';

 
// export default class App  extends React.Component {
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
        
        
    
    
         
    
//       <ScrollView>
 

//       </ScrollView>
      
              
   
    

//   </View>
//     );
//   }
//  }
