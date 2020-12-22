import React from 'react';
import { StyleSheet, Text, View ,Image, Button,Picker, CheckBox} from 'react-native';

import TextField from '@material-ui/core/TextField';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import { useState } from "react";



function Shopinf()  {

    const [selectedValue, setSelectedValue] = useState("Select");
    const [isSelected, setSelection] = useState(false);
    const [isSelected1, setSelection1] = useState(false);
    const [isSelected2, setSelection2] = useState(false);

    const handlePress = () => true;
    const handlePress1 = () => true;
  
    const handleClose = () => {
      setOpen(false);
      
    };
   
    function refreshPage() {
      window.location.reload(false);
    }
    
    return (
      
      <View style={{flex:1, alignItems:"center", justifyContent:"center" ,textAlign: 'center'}}>
        <DialogContent>
          <DialogContentText>
            Shop Details
          </DialogContentText>
        <h1>Shop Photo</h1>
        <View>
        <Image style={{width:100, height:100,borderWidth: 1,borderColor:'black',alignItems:'center'}}
        source={require('../assets/icon.png')}/>
        </View>
        <Text>Shop Name:</Text><TextField
          
            autoFocus
            margin="dense"
            id="name"
            type="name"
            fullWidth
          />
          <Text>Area Name/Address of Shop :</Text><TextField
          
            autoFocus
            margin="dense"
            id="name"
            type="name"
            fullWidth
          />
          
            <Text>Shop Owner/Service Provider :</Text><TextField
            autoFocus
            margin="dense"
            id="name"
            type="name"
            fullWidth
          />

<Text >Substance List/Price list</Text>
            <View style={styles.checkboxContainer}>
            <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        /><Text style={styles.label}>Sugar</Text>
        <CheckBox
          value={isSelected1}
          onValueChange={setSelection1}
          style={styles.checkbox}
        /><Text style={styles.label}>Tea</Text>
        <CheckBox
          value={isSelected2}
          onValueChange={setSelection2}
          style={styles.checkbox}
        /><Text style={styles.label}>Coffee</Text>
      </View>
     
        </DialogContent>
        <DialogActions>
          
        <Button
         onPress = {handlePress,refreshPage}
         title = "Order"
         color = "black"
      />
      <Button
         onPress = {handlePress1,refreshPage}
         title = "Book Appoinment"
         color = "black"
      />
        </DialogActions>

  </View>
    );

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    checkboxContainer: {
      flexDirection: "row",
     
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
    },
  });
export default Shopinf;
