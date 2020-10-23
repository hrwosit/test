import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { View } from "react-native";


export default function Reg() {
  const [open, setOpen] = React.useState(false);
  const [openR, setOpenR] = React.useState(false);
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
  

  return (
    <View>
      <Button variant="contained" color="primary" disableElevation onClick={handleClickOpen}>
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
          <Button onClick={handleClose} variant="contained" color="primary" disableElevation>
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary" disableElevation>
            Login
          </Button>
        </DialogActions>
      </Dialog>
      
    
      <Button variant="contained" color="primary" disableElevation onClick={handleClickOpenR}>
        Register
      </Button>
      <Dialog open={openR} onClose={handleCloseR} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Register</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="FirstName"
            type="Name"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="LastName"
            type="Name"
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
          <Button onClick={handleCloseR} variant="contained" color="primary" disableElevation>
            Cancel
          </Button>
          <Button onClick={handleCloseR} variant="contained" color="primary" disableElevation>
            Register
          </Button>
        </DialogActions>
      </Dialog>
      
    </View>
  );
}