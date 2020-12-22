import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { View,Picker,button } from "react-native";
import { Dropdown } from 'react-bootstrap';
import { useState } from "react";


 function Reg() {


  const [selectedValue, setSelectedValue] = useState("Select");
  const [selectedValue1, setSelectedValue1] = useState("Select");
  const [selectedValue2, setSelectedValue2] = useState("Select");

  const [open, setOpen] = React.useState(false);
  const [openR, setOpenR] = React.useState(false);
  const [openR1, setOpenR1] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };
 
  const handleClickOpenR = () => {
    setOpenR(true);
  };

  const handleCloseR = () => {
    setOpenR(false);
  };
  
  const handleClickOpenR1 = () => {
    setOpenR1(true);
  };

  const handleCloseR1 = () => {
    setOpenR1(false);
  };
  
  function refreshPage() {
    window.location.reload(false);
  }

   
  return (
    <View style={{flexDirection:'row'}}>
      <Button  color="primary" variant="contained" disableElevation onClick={handleClickOpen}>
        Login
      </Button>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="Email"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id='password'
            label="password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose, refreshPage } variant="contained" color="primary" disableElevation>
            Cancel
          </Button>
          <Button onClick={handleClose, refreshPage } variant="contained" color="primary" disableElevation>
            Login
          </Button>
        </DialogActions>
      </Dialog>
      
      <View>
              <Dropdown>
        <Dropdown.Toggle ><Button variant="contained" color="primary" disableElevation>Signup</Button>
            
        </Dropdown.Toggle>


        <Dropdown.Menu >
        <Dropdown.Item  ><Button variant="contained" color="primary" disableElevation onClick={handleClickOpenR1} >
                  VendorSignup
              </Button></Dropdown.Item>
            <Dropdown.Item ><Button variant="contained"
             color="primary" disableElevation onClick={handleClickOpenR} >
                CustomerSignup
              </Button></Dropdown.Item>
              
              
        </Dropdown.Menu>
        </Dropdown>
            
        </View>
      <Dialog open={openR} onClose={handleCloseR} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">CustomerSignup</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <h1>Only For Customer Registration</h1>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="CustomerName"
            type="Name"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="City"
            type="Name"
            fullWidth
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Pincode"
            type="number"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="PhoneNumber"
            type="number"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id='password'
            label="password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseR, refreshPage } variant="contained" color="primary" disableElevation>
            Cancel
          </Button>
          <Button onClick={handleCloseR, refreshPage } variant="contained" color="primary" disableElevation>
            Signup
          </Button>
        </DialogActions>
      </Dialog>
      
      
      <Dialog open={openR1} onClose={handleCloseR1} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">VendorSignup</DialogTitle>
        <DialogContent>
          <DialogContentText>
          <h1>Only For Vendor or Service Provider Registration</h1>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ShopName"
            type="Name"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="OwnerName"
            type="Name"
            fullWidth
          />

            <Picker
              selectedValue={selectedValue}
              style={{ height: 35, width:550 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                <Picker.Item label="Select" value="select" />
                <Picker.Item label="Mobile" value="mobile" />
                <Picker.Item label="Cloth" value="cloth" />
                <Picker.Item label="Medical" value="medical" />
            </Picker>  

            <Picker
              selectedValue1={selectedValue1}
              style={{ height: 35, width:550 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}>
                <Picker.Item label="Select" value="select" />
                <Picker.Item label="Home Delivery" value="homedelivery" />
                <Picker.Item label="PickUp" value="pickup" />
                
            </Picker>

            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ServiceCapacity"
            type="Name"
            fullWidth
          />
          
          <Picker
              selectedValue2={selectedValue2}
              style={{ height: 35, width:550 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}>
                <Picker.Item label="Select" value="select" />
                <Picker.Item label="Product1" value="mobile" />
                <Picker.Item label="Product2" value="cloth" />
            </Picker>

            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="PhoneNumber"
            type="number"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id='password'
            label="password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseR1, refreshPage } variant="contained" color="primary" disableElevation>
            Cancel
          </Button>
          <Button onClick={handleCloseR1, refreshPage } variant="contained" color="primary" disableElevation>
            Signup
          </Button>
        </DialogActions>
      </Dialog>
    </View>
  );
}
export default Reg;