import React from 'react';
import { View, Button, TextInput, StyleSheet, Image } from 'react-native';
import { Input } from 'react-native-elements';

 class Signup extends React.Component {
  state = {
    Name: '',
    last_name: '',
    city: '',
    state:'',
    phone_number: '',
    password: '',
  
  };

  render() {
    return (
      <View styles={styles.container}>
        {/* <Image
          styles={styles.image}
          source={require('./Images/WajhniLogo.png')}
        /> */}

        <Input placeholder="First Name" />

        <Input placeholder="Last Name" />

        <Input placeholder="Phone Number" />

        <Input placeholder="City" />
        <Input placeholder="State" />
        {/* <Input placeholder="Phone Number" /> */}
        <Input secureTextEntry={true} placeholder="Password" />

        {/* <Button title="Sign Up" onPress={this.signUp} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    padding: 1,
    marginBottom: 50,
    imageAlign: 'center',
  },

  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    marginTop: 1000,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Signup;