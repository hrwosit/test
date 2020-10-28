import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './src/Header';
import Mission from './src/Screen/Mission';
import Product from './src/Screen/Product';
import Contact from './src/Screen/Contact';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                // <ion-icon name="home"></ion-icon>
                <Ionicons
                name={focused ? 'ios-home' : 'ios-home'}
                  size={size}
                  color={color}
                />
              );
            } 
            else if (route.name === 'Mission') {
              return (
                <Ionicons
                  name={focused ? 'ios-list-box' : 'ios-list'}
                  size={size}
                  color={color}
                />
                
              );
              
            }
            else if (route.name === 'Product') {
              return (
                <Ionicons
                  name={focused ? 'ios-product' : 'ios-product'}
                  size={size}
                  color={color}
                />
                
              );
              
            }

            else if (route.name === 'Contact') {
              return (
                <Ionicons
                  name={focused ? 'ios-call' : 'ios-call'}
                  size={size}
                  color={color}
                />
                
              );
              
            }

          },
        })}
        tabBarOptions={{
          activeTintColor: '#1f2d61',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Header} 
        // options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen name="Mission" component={Mission} />
        <Tab.Screen name ="Product" component={Product}/>
        <Tab.Screen name ="Contact" component={Contact}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// /*Example of SQLite Database in React Native*/
// import React from 'react';

// //Import react-navigation
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator} from 'react-navigation-stack';

// import Header from './src/Header';
// import Mission from './src/Mission';


// const App = createStackNavigator({
//   Header: {
//     screen: Header,
  
//   },
//   Mission: {
//     screen: Mission ,
  
//   },
 
// });
// export default createAppContainer(App);
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
