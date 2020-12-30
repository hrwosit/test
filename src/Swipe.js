import React from "react";
import { Text, TouchableOpacity, View,StyleSheet,Image,Button, Linking } from "react-native";
import Swiper from "react-native-web-swiper";
 
class Swipe extends React.Component {
  constructor(props) {
    super(props);
   
  }
  
    render() {
      
        return (
          <View  style={{width:'100%',height:'240px'}} >

<View style={{flex:1}}>
                  <Swiper
                    from={1}
                    horizontal
                    loop={false}
                   
                    timeout={0}
                    springConfig={{ speed: 11 }}
                    minDistanceForAction={0.2}
                    onIndexChanged={(index) => null}
                    
                    controlsProps={{
                      dotsTouchable: true,
                      
                      prevPos: 'left',
                      nextPos: 'right',
                      nextTitle: '>',
                      nextTitleStyle: { color: 'blue', fontSize: 40, fontWeight: '500' },
                      PrevComponent: ({ onPress }) => (
                        <TouchableOpacity onPress={onPress}>
                         
                          <Image style={{width:30,height:30}}
                          source={require('../assets/left-arrow.png')}/>
                        </TouchableOpacity>
                      ),

                      NextComponent: ({ onPress }) => (
                        <TouchableOpacity onPress={onPress}>
                          
                            <Image style={{width:30,height:30}}
                            source={require('../assets/right-arrow.png')}/>
                        </TouchableOpacity>

                                              ),
                                  }}
                       >
                   <View style={{flex:1,alignItems:'center',flexDirection:'row'}}>

                      <View style={{flex:1,alignItems:"center",justifyContent:"center", width:100,height:100, marginRight:150, marginLeft:50}}>
                       
                         <Image  style={{width:100,height:100}} 
                          source={require('../assets/hospital.png')}/><Text onPress={()=>alert("Hello class cmp")}  style={{alignItems:'center'}} >Hospitals</Text>
                     
                      </View>

                      <View style={{flex:1,alignItems:"center",justifyContent:"center",width:100,height:100, marginRight:150}}>
                          <Image style={{width:100,height:100}} onPress={()=>alert("Hello class cmp")}
                          source={require('../assets/grocery.png')}/> <Text onPress={()=>alert("Hello class cmp")}  style={{alignItems:'center'}} >Grocery Shops</Text>
                          
                      </View>

                      <View style={{flex:1,alignItems:"center",justifyContent:"center", width:100,height:100, marginRight:150}}>
                          <Image style={{width:100,height:100}}  
                           source={require('../assets/recharge.png')}/><Text onPress={()=>alert("Hello class cmp")}  style={{alignItems:'center'}} >Recharge Shops</Text>
                      </View>

                      <View style={{flex:1,alignItems:"center",justifyContent:"center", width:100,height:100, marginRight:150}}>
                          <Image style={{width:100,height:100}}
                          source={require('../assets/smartphone.png')}/><Text onPress={()=>alert("Hello class cmp")} style={{alignItems:'center'}}>Mobile Shops</Text> 
                      </View>

                     

                       <View style={{flex:1,alignItems:"center",justifyContent:"center", width:100,height:100, marginRight:150}}>
                       <Image style={{width:100,height:100}}
                            source={require('../assets/medical.png')}/><Text style={{alignItems:'center'}} onPress={()=>alert("Hello class cmp")}>Medical Shops</Text>
                        </View>
                                
                        <View style={{flex:1,alignItems:"center",justifyContent:"center", width:100,height:100, marginRight:150}}>
                          <Image style={{width:100,height:100}}
                          source={require('../assets/school.png')}/><Text style={{alignItems:'center'}}onPress={()=>alert("Hello class cmp")}>Schools</Text>
                        </View>

                        </View>
                    <View style={{flex:1,alignItems:'center',flexDirection:'row'}}> 
                        

                        <View style={{flex:1,alignItems:"center",justifyContent:"center", width:100,height:100, marginRight:150}}>
                          <Image style={{width:100,height:100}}
                          source={require('../assets/university.png')}/> <Text onPress={()=>alert("Hello class cmp")} style={{alignItems:'center'}}>Colleges</Text>
                        </View>
                       

                        <View style={{flex:1,alignItems:"center",justifyContent:"center", width:100,height:100, marginRight:150}}>
                          <Image style={{width:100,height:100}}
                          source={require('../assets/enterprise.png')}/><Text onPress={()=>alert("Hello class cmp")} style={{alignItems:'center'}}>Companies</Text>
                        </View>
                    </View>
                  </Swiper>
              </View>
         
          
          </View>
        )
    }
}

export default  Swipe;

