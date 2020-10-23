
import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button,Image } from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons'; 
import Swiper from 'react-native-web-swiper';
// import Login from './src/Login' ;
// import Header from './src/Header';

import {  
    createSwitchNavigator,  
    createAppContainer,  
} from 'react-navigation';  
  
import {  
   createStackNavigator  
} from 'react-navigation-stack';  

import {  createDrawerNavigator} from 'react-navigation-drawer';

class DashboardScreen extends Component {  
    static navigationOptions = {  
         title: 'Dashboard',  
    };  
  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                        <View >
            {/* <Login/> */}
             <Text  style={{ alignSelf:'flex-end',marginRight:'29%',fontSize:'12px'}} >
            <a href="https://www.gmail.com/"  style={{ color:'#fff'}}>New to SHOPMIX+ create an account</a>
     
         
             </Text>
               </View>
               
            </View>  
        );  
    }  
}  
const DashboardStackNavigator = createStackNavigator(  
    {  
        DashboardNavigator: DashboardScreen  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
        return {  
            headerLeft: (  
                <Icon  
                    style={{ paddingLeft: 10 }}  
                    onPress={() => navigation.openDrawer()}  
                    name="md-menu"  
                    size={30}  
                />  
            )  
        };  
        }  
    }  
);  
  
const AppDrawerNavigator = createDrawerNavigator({  
    Dashboard: {  
        screen: DashboardStackNavigator  
    },  
    
});  
export default DashboardScreen;