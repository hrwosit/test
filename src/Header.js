import React from 'react';
import { SafeAreaView, View, Text, StyleSheet,Button,Image } from 'react-native';
import Toptab from './Toptab';
import slogo from '../assets/slogo.png';


const Header = ({ onBack, title }) => (
  <SafeAreaView style={styles.headerContainer}>
    
    <View style={styles.header}>
    <Image source={slogo} style={{ 
    width: 86,
    height: 78,}} />   
      <View style={styles.headerCenter}>
      {/* <Image source={slogo} style={{width:22,height:72}} />    */}
        <View  style={styles.content }>
      <Text style={{color: '#fff' , fontSize:18}}
      onPress={() => Linking.openURL('http://google.com')}>Mission        </Text>
       <Text style={{color: '#fff',fontSize:18}}
      onPress={() => Linking.openURL('http://google.com')}>Products/Services        </Text>
        <Text style={{color: '#fff',fontSize:18}}
      onPress={() => Linking.openURL('http://google.com')}>Contact Us
        
          </Text>
      {/* <Button title="Mission" onPress={() => Alert.alert('Simple Button pressed')} />
      <Button title="Products/Services" onPress={() => Alert.alert('Simple Button pressed')} />
      <Button title="Contact Us" onPress={() => Alert.alert('Simple Button pressed')} /> */}
  
      </View>
     
      </View>
    </View>

  </SafeAreaView>  
  
  
   
);











const styles = StyleSheet.create({
  headerContainer: {
    alignSelf:'flex-stretch',
    marginTop:'2',
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: '#ff4e3f',
  backgroundColor: '#1f2d61',
    //  padding: 10,

  },
  header: {
    // padding: 10,
    paddingVertical: 5,
    // alignItems: 'center',
    flexDirection: 'row',
    minHeight: 50
  },
  content:{ 
    flexDirection: 'row',
    alignItems: 'center',  
    marginLeft:'70%',
    marginTop:'9',
    textAlign: '',
    color: 'white',
   justifyContent:'center',
    flex:1
      

  },
  headerCenter: {
    flex: 2,
    // order: 3
  },
  headerLeft: {
    order: 1,
    width: 70
  },
  headerRight: {
    order: 3,
    width: 80
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'left',
    color: 'white',
   marginTop:'12'
  
  },
});

export default Header;